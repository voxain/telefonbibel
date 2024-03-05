# IDEAS

### **Login via LDAP** 
- Assign Permissions to AD Users
- -> No need to handle Users and passwords
- Separate permissions for editing numbers, notes, maybe departments even
- Admin permission to change logo and company name 
- Maybe assign permissions through AD-Groups? e.g. role-telefonbibel-admin grants admin rights

### **Departments**
- Department manager to handle depts. and their general phone numbers
- Assign phone numbers to existing departments through unique IDs, no dupliacates! 

### **Start page**
- Instant view of the entire library / Search field
- Company name and logo
- Button for admin? Or hidden URL (those who know)

### **Generate PDFs on the fly**
- Group numbers in PDFs based on department
- Generate separate PDFs for mobile and landline
- Include Last changed date from whatever was last updated
- Different PDFs to choose from
    - Maybe have a library of pre-defined layouts with previews and descriptions
        - e.g. A big one for one department only
        - A compact, A6 sized one for iPad cases and pockets
        - A big A3 version to fit everything
        - An enlarged A4 version with big font for blind people...
- Adjust font size 
    - Optimally, have user pick on how many pages to stretch data for convenience
- **DO NOT!!!** cut off departments at the end of a page/column!! Instead, push entire dept. onto next one
- Data filters (choose which data to include) e.g.:
    - Print only DECTs
    - Print with notes
    - Group by department (or don't)
    - Parameter on departments whether to include on prints by default

### Diffs
- See what has changed since XXX

## **Data structure**
- **Everything**
    - Created at
    - Created by
    - Last modified at
    - Last modified by
    - Hidden (to make non-destructive changes)
    - Public note?
    - Private note?
    - History(Last 3 versions? Or auto-backup database)
- **Site**
    - ID (AUTO-GENERATED)
    - Name
    - External number (generate full number for contacts??)
    - General number (optional)
- **Department**
    - ID (AUTO-GENERATED)
    - Name
    - PrintByDefault (to exclude Special Depts. like "Stadtverwaltung" from prints by default noone needs that ever)
    - General number (optional)
- **Contact**
    - ID (AUTO-GENERATED)
    - Name, Surname, Title
    - Landline number
    - DECT number
    - Additional number
    - Email addresses
    - Gender or Formula (Frau, Herr, Person, Gruppe..)(optional?)
    - Picture(?, optional)