---
inject: true
to: package.json
after: dependencies
skip_if: "@react-navigation/drawer"
sh: cd <%= cwd %> && yarn install
---
"@react-navigation/drawer":"*",