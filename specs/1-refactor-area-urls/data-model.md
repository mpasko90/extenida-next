# Data Model: Area

This feature does not introduce any new data models. It primarily deals with routing and content presentation. The "Area" entity is a conceptual model derived from the URL structure and the content in `data/services.ts`.

- **Entity**: Area
- **Description**: Represents a geographical service area within London.
- **Attributes**:
  - `name`: The display name of the area (e.g., "Putney").
  - `slug`: The URL-friendly identifier for the area (e.g., "putney").
- **Data Source**: The list of valid areas is implicitly defined by the subdirectories within `app/areas/`. This will be migrated to `app/london/`.
