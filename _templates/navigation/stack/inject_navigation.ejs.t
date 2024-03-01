---
inject: true
to: package.json
after: dependencies
skip_if: "@react-navigation/native-stack"
sh: cd <%= cwd %> && yarn install
---
"@react-navigation/native-stack":"*",