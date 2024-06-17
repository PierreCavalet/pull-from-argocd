# pull-from-argocd

- Clone the repository
- install dependencies

```
npm ci
```

- start the project

```
npm run dev
```

- expose your localhost with ngrok

```
ngrok http 3000 --subdomain demo-pull-from-argocd
```

- upload your file from argoCD to your ngrok endpoint

```
curl -X POST -F "file=@test.txt" https://demo-pull-from-argocd.eu.ngrok.io/upload
```

- enjoy your local file in the upload folder !
