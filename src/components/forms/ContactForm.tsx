import { useState, FormEvent } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export const ContactForm = ({
  title = "Skontaktuj się z nami",
  subtitle = "Wypełnij formularz, aby uzyskać bezpłatną wycenę lub zadać pytanie.",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Basic validation
    if (!formData.name.trim()) newErrors.name = 'Imię i nazwisko jest wymagane';
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Niepoprawny format adresu email';
    }
    if (!formData.message.trim()) newErrors.message = 'Wiadomość jest wymagana';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Send data to your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Wystąpił błąd podczas wysyłania formularza');
      }

      // Success!
      setSubmitStatus('success');
      setSubmitMessage('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');

      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

    } catch (error) {
      // Handle errors
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Wystąpił błąd podczas wysyłania formularza');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          {submitMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="name"
              name="name"
              type="text"
              label="Imię i nazwisko"
              placeholder="Wprowadź swoje imię i nazwisko"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="Wprowadź swój adres email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="phone"
              name="phone"
              type="tel"
              label="Telefon (opcjonalnie)"
              placeholder="Wprowadź swój numer telefonu"
              value={formData.phone}
              onChange={handleChange}
            />

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Rodzaj usługi
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Wybierz usługę</option>
                <option value="house-extensions">House Extensions</option>
                <option value="loft-conversions">Loft Conversions</option>
                <option value="driveways">Driveways & Patios</option>
                <option value="other">Inna</option>
              </select>
            </div>
          </div>

          <Textarea
            id="message"
            name="message"
            label="Wiadomość"
            placeholder="W czym możemy Ci pomóc? Podaj więcej szczegółów dotyczących Twojego projektu"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
