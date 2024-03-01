---
inject: true
to: package.json
after: dependencies
skip_if: "@react-navigation/bottom-tabs"
sh: cd <%= cwd %> && yarn install
---
"@react-navigation/bottom-tabs":"*",