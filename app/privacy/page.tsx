'use client';

import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose lg:prose-xl max-w-none"
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="mb-4">
              This privacy policy sets out how Buildclock Limted t/a EXTENDIA uses and protects any information that you give us.
            </p>
            <p className="mb-4">
              Buildclock Limted t/a EXTENDIA is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Data collected</h2>
            <p className="mb-4">
              We respect the privacy of all visitors to our website. We are totally compliant with United Kingdom Data Protection legislation.
            </p>
            <p className="mb-4">
              Buildclock Limted t/a EXTENDIA will not collect personally identifiable information from you through our website, unless you provide it to us voluntarily. Examples of such information include your name, phone number, address and email address. If you do not want personal data to be collected, please do not submit this to the website.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Use of Personal Data</h2>
            <p className="mb-4">
              When you do provide us with personal data, we may use the information given in the following ways, unless otherwise stated: we may store and process that information to better understand your needs and how we can improve our products and services; we (or a third party on our behalf in connection with an order/promotion, or a fulfilment house) may use the information provided to contact you;
            </p>
            <p className="mb-4">
              information submitted via Buildclock Limted t/a EXTENDIA website may be passed to our suppliers. for the purpose of order fulfilment;
            </p>
            <p className="mb-4">
              and/or we may provide other third parties with summary, but not individual, information about visitors to our site. We do not currently, nor do we intend to rent, sell or market personal data about you to third parties, unless you have given consent for us to do so, for example, by checking the box when submitting a form to us.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Security of Data Transmission</h2>
            <p className="mb-4">
              Until it reaches ourselves, information submitted to us over this website is usually unprotected. For this reason, users are asked not to submit or send by email, confidential information such as credit card numbers and other confidential details, unless specifically asked to do so by Buildclock Limted t/a EXTENDIA.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Collection of Technical Information</h2>
            <p className="mb-4">
              Technical information may be collected when you visit the Buildclock Limted t/a EXTENDIA website. This may include the type of internet browser you are using, the operating system on your computer and the domain name of the website from which you linked to our site.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Information Placed on Your Computer (Cookies)</h2>
            <p className="mb-4">
              The Buildclock Limted t/a EXTENDIA website uses Cookies to remember visitors to the site and provide you with relevant content. Most internet browsers give you the option to block and erase Cookies, and will provide a warning before Cookie is stored. Please refer to the instructions of your internet browser for more information.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">What we collect</h2>
            <p className="mb-4">We may collect the following information:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Name</li>
              <li>Contact information including email address</li>
              <li>Demographic information such as postcode</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">What we do with the information we gather</h2>
            <p className="mb-4">
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Internal record keeping.</li>
              <li>We may use the information to improve our products and services.</li>
              <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
              <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
              <li>We may use the information to customise the website according to your interests.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Security</h2>
            <p className="mb-4">
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">How we use cookies</h2>
            <p className="mb-4">
              A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            </p>
            <p className="mb-4">
              We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. The shopping basket system on this site requires the use of cookies.
            </p>
            <p className="mb-4">
              Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
            </p>
            <p className="mb-4">
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Links to other websites</h2>
            <p className="mb-4">
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Controlling your personal information</h2>
            <p className="mb-4">
              You may choose to restrict the collection or use of your personal information in the following ways: whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.
            </p>
            <p className="mb-4">
              If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at: office@extendia.co.uk
            </p>
            <p className="mb-4">
              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen. You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to us:
            </p>
            <address className="not-italic mt-4">
              Buildclock Limted t/a EXTENDIA <br />
              International House<br />
              109-111 Fulham Palace Road<br />
              London<br />
              W6 8JA
            </address>
            <p className="mt-4">
              If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
