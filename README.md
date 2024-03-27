# Telefonbibel

> [!WARNING]  
> Early development preview. Not for production use.

## Installation

0. Install git, nodejs and npm.
1. Clone the repository.
2. Run `npm i`.
3. Adjust `config/config.json` as needed.
4. Run `npm start` and access through configured port. Default is 80 for production and 3033 for development environment. If not set, defaults to 3033.



## FAQ (And things I want to note for myself)

> ### ❓ Why a JSON "Database"?
> Because it is fitting for the size of the project, provides the easiest installation, maintenance and backup combination and I generally like working with JSON as a file format.
> The lightweight load on the "database" makes it suitable even for bigger environments and server side caching will help with bigger loads.

> ### ❓ Why not use AD data/Other software...?
> The project is being developed as a hobby for my workplace, which I work at as a systems integrator - not a developer. So it is tailored to just our needs for now, which don't plays better with the kind of AD setup that we have.
> However, the plan is to make this as flexible as possible, allowing for easy customizations through other "connectors" that can be added later, in order to provide data through other kinds of databases, including, but not limited to, AD Users.
> 
> Also, I wanted to make something that is customizable to the deepest depths of the software so that company-specific features can be added on the fly. And all the other software is ugly.

> ### ❓ What's up with the PDF exports?
> Again, the project is first and foremost tailored to our needs at the company. I try to, however, make it as flexible as possible, so that exporting data in a printable format is viable.

> ### ❓ Why no local account management?
> So I don't have to deal with password and permission management.
> It is envisioned to add "connectors" just like for databases in the future however, so that this is also compatible to non-LDAP systems.

> ### ❓ Why did you spend hours on a fancy logger that noone will see and not actual features?
> Wish I knew

View notes.md for a list of what is planned.