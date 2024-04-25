# IDEAS

- Possibly automated database backups to a special location/mail address/ftp server...

### **Login via LDAP** 
- Assign Permissions to AD Users
- -> No need to handle Users and passwords
- Separate permissions for editing numbers, notes, maybe departments even
- Admin permission to change logo and company name 
- Maybe assign permissions through AD-Groups? e.g. role-telefonbibel-admin grants admin rights

### **Departments**
- Department manager to handle depts. and their general phone numbers
- Assign phone numbers to existing departments through unique IDs, no dupliacates! 
- Set availability hours and weekdays for depts. and/or people
- Add emergency numbers or notes for depts.

### **Start page**
- Instant view of the entire library / Search field
- Company name and logo
- Button for admin? Or hidden URL (those who know)

### **Availability monitoring (nice to have)**
- Have a client software auto running on computers
- Have them report the logged in windows user and/or PC serial number to the server via http every X minutes
- Link users/serials to contacts so the client doesn't have to be configured and users can switch PCs via roaming profiles
- If server hasn't gotten a "heartbeat" in the last Y minutes, consider the contact as "not available"
- That way, if someone's PC is off, or their user is logged in, users won't even have to try calling a specific person as the phone list can already tell them that that person is not in the house
- Be able to put client software to "unavailable" manually (for pause or if your PC is constantly on), but have the button to re-enable it be constantly on top of the screen so you don't forget to reactivate
- Be able to set a vacation mode which will tell users that you're not available until that date
- Vacation mode would also tell the server not to expect a heartbeat from the software and stop listening until day X
- If no windows user/serial is linked to a contact, obviously availability information is not shown in the main list
- Could still be shown when expanding the row, like a little note saying "Availability not tracked"

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