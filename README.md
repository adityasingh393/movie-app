# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
movie-app-idk2
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ da28905a8ba9aa2270ba432c4b3ecd67bd19a6
│  │  ├─ 0a
│  │  │  └─ 5fa61bee9e364eb57b63e4308c42b488fc54ea
│  │  ├─ 0b
│  │  │  └─ 122c340817857e335cbecd1825bb8bb3923f50
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 0e
│  │  │  └─ d8a70e2888ea7a8119c4cfa6a6ddc89e165120
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 17
│  │  │  └─ b393203a8228266d10025e422ccb8ccf865ccf
│  │  ├─ 23
│  │  │  └─ 5be813c1d8ee85955b66d9f98ece4afe376174
│  │  ├─ 2f
│  │  │  ├─ b0479cc23254da7f34e2c5592cd9b5d568c6f2
│  │  │  └─ c71c835c76662dae3a087861db2ded29c02b4f
│  │  ├─ 3a
│  │  │  └─ fdd6e38438be7612befbd4b656af7bed27a31a
│  │  ├─ 3d
│  │  │  └─ 7150da80e43e3650342aa4758fa8b74e95d6d6
│  │  ├─ 46
│  │  │  └─ 9986999d370784978215ce6101e415fbc699d5
│  │  ├─ 4d
│  │  │  └─ 39a34d23af86c7bec88ca9800be2c2981e7c5c
│  │  ├─ 4f
│  │  │  └─ 96700fe6316e80454b98259369411aca9f38d9
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  ├─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  │  └─ b7f833d9cf6b096c3ce42bba0591f34a9f6976
│  │  ├─ 60
│  │  │  └─ 68664bbf9ec65ed8be64cc4025c460e1009c92
│  │  ├─ 67
│  │  │  └─ 6b4b018c725cff2e610314431c49a95d4e47bf
│  │  ├─ 72
│  │  │  └─ 7ac86695ecc9d038f595e369386ebaa863fbee
│  │  ├─ 78
│  │  │  └─ 49b75ad4f3cb8aa45089e37ec6e22aeef96b16
│  │  ├─ 7e
│  │  │  └─ 2a5b330f16da20b9dec3cd8fbef32cdafed8e7
│  │  ├─ 83
│  │  │  └─ 51145b59d52a2e62c9db29bcec5317e3ccf694
│  │  ├─ 8d
│  │  │  └─ 3a321b2ff5acaa5d9ac16e7caf2000021cb527
│  │  ├─ 8f
│  │  │  └─ 3f3a8ccb66b3b9cb4d1728fe808ae3587d69a9
│  │  ├─ 94
│  │  │  └─ bf240dd01e7d0e5778580cfe9f18e6f33c8740
│  │  ├─ 9c
│  │  │  └─ 1f165d12762770e95c25c26c85d6cf0a1f0df7
│  │  ├─ a1
│  │  │  └─ 8d9f1c2932b0d5935aaa13f0626f0853f1c130
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ aa
│  │  │  └─ cf4603b4c22ee726e903fdeca0e0b6e90261ea
│  │  ├─ ad
│  │  │  └─ bf4e456c6966f279b1ea3343cb0d744d030931
│  │  ├─ af
│  │  │  └─ ab62344bcb7e248f7ca9d269c0c5cecd291277
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ c3
│  │  │  └─ 1461c72399552aa4a16799be8f62777212d2ed
│  │  ├─ c4
│  │  │  └─ c91c6392ec936e45236b56f96d10469e8709b3
│  │  ├─ ce
│  │  │  └─ ef0ec2726bd863b1d4f71c895bcd626839191f
│  │  ├─ d6
│  │  │  ├─ 80fc84ddb05277ca5a9bdb387ad06eb27709ae
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d7
│  │  │  └─ 39292ae0143669e21b30df04a74b5baf985175
│  │  ├─ de
│  │  │  └─ f223ae12a740e1d32542203b83e650403f3e50
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e7
│  │  │  ├─ ab370edd5fe838757ffd3bdecd1f449ba3d705
│  │  │  ├─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  │  └─ f9d8fd92465bea17fa45c107453cda59e01d9b
│  │  ├─ ea
│  │  │  └─ 9d0cd8255683d84f125948115daf1de0f06b1f
│  │  ├─ eb
│  │  │  └─ 88613d0932f24942071f3617475d6c079e64cf
│  │  ├─ ee
│  │  │  └─ 163eb9c89ce34ecd8df72fe9be07331295b748
│  │  ├─ f2
│  │  │  └─ fa4ee762ad527704ce18a97b4ff5f9627bac65
│  │  ├─ f4
│  │  │  └─ f4e17c71cd8dc2de7fc914c4857d532c7d1569
│  │  ├─ fc
│  │  │  ├─ 9e753c97be4643584f586f3f5b2f707e5f11de
│  │  │  └─ f369fc4517a70e0a7a7afd82afe08144c50250
│  │  ├─ fd
│  │  │  ├─ 5a70dfbfde397a27255a304ca9dd3a09201829
│  │  │  └─ a639c4f6dd3638ea48f3db72a2896fe7cb6c66
│  │  ├─ ff
│  │  │  └─ f2b174caa53cf1d22f09adea2069fbfdb035a5
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ MovieList.css
│  │  ├─ MovieList.tsx
│  │  └─ Navbar.tsx
│  ├─ data.json
│  ├─ hooks
│  │  └─ useFetchMovies.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ FavoritePage.tsx
│  │  ├─ HomePage.tsx
│  │  ├─ LoginPage.tsx
│  │  └─ SignupPage.tsx
│  ├─ redux
│  │  ├─ slices
│  │  │  ├─ authSlice.ts
│  │  │  └─ movieSlice.ts
│  │  └─ store.ts
│  ├─ utils
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
movie-app-idk2
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 03
│  │  │  └─ da28905a8ba9aa2270ba432c4b3ecd67bd19a6
│  │  ├─ 0a
│  │  │  └─ 5fa61bee9e364eb57b63e4308c42b488fc54ea
│  │  ├─ 0b
│  │  │  └─ 122c340817857e335cbecd1825bb8bb3923f50
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 0e
│  │  │  └─ d8a70e2888ea7a8119c4cfa6a6ddc89e165120
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 17
│  │  │  └─ b393203a8228266d10025e422ccb8ccf865ccf
│  │  ├─ 23
│  │  │  └─ 5be813c1d8ee85955b66d9f98ece4afe376174
│  │  ├─ 2f
│  │  │  ├─ b0479cc23254da7f34e2c5592cd9b5d568c6f2
│  │  │  └─ c71c835c76662dae3a087861db2ded29c02b4f
│  │  ├─ 3a
│  │  │  └─ fdd6e38438be7612befbd4b656af7bed27a31a
│  │  ├─ 3d
│  │  │  └─ 7150da80e43e3650342aa4758fa8b74e95d6d6
│  │  ├─ 46
│  │  │  └─ 9986999d370784978215ce6101e415fbc699d5
│  │  ├─ 4d
│  │  │  └─ 39a34d23af86c7bec88ca9800be2c2981e7c5c
│  │  ├─ 4f
│  │  │  └─ 96700fe6316e80454b98259369411aca9f38d9
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  ├─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  │  └─ b7f833d9cf6b096c3ce42bba0591f34a9f6976
│  │  ├─ 60
│  │  │  └─ 68664bbf9ec65ed8be64cc4025c460e1009c92
│  │  ├─ 67
│  │  │  └─ 6b4b018c725cff2e610314431c49a95d4e47bf
│  │  ├─ 72
│  │  │  └─ 7ac86695ecc9d038f595e369386ebaa863fbee
│  │  ├─ 78
│  │  │  └─ 49b75ad4f3cb8aa45089e37ec6e22aeef96b16
│  │  ├─ 7e
│  │  │  └─ 2a5b330f16da20b9dec3cd8fbef32cdafed8e7
│  │  ├─ 83
│  │  │  └─ 51145b59d52a2e62c9db29bcec5317e3ccf694
│  │  ├─ 8d
│  │  │  └─ 3a321b2ff5acaa5d9ac16e7caf2000021cb527
│  │  ├─ 8f
│  │  │  └─ 3f3a8ccb66b3b9cb4d1728fe808ae3587d69a9
│  │  ├─ 94
│  │  │  └─ bf240dd01e7d0e5778580cfe9f18e6f33c8740
│  │  ├─ 9c
│  │  │  └─ 1f165d12762770e95c25c26c85d6cf0a1f0df7
│  │  ├─ a1
│  │  │  └─ 8d9f1c2932b0d5935aaa13f0626f0853f1c130
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ aa
│  │  │  └─ cf4603b4c22ee726e903fdeca0e0b6e90261ea
│  │  ├─ ad
│  │  │  └─ bf4e456c6966f279b1ea3343cb0d744d030931
│  │  ├─ af
│  │  │  └─ ab62344bcb7e248f7ca9d269c0c5cecd291277
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ c3
│  │  │  └─ 1461c72399552aa4a16799be8f62777212d2ed
│  │  ├─ c4
│  │  │  └─ c91c6392ec936e45236b56f96d10469e8709b3
│  │  ├─ ce
│  │  │  └─ ef0ec2726bd863b1d4f71c895bcd626839191f
│  │  ├─ d6
│  │  │  ├─ 80fc84ddb05277ca5a9bdb387ad06eb27709ae
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d7
│  │  │  └─ 39292ae0143669e21b30df04a74b5baf985175
│  │  ├─ de
│  │  │  └─ f223ae12a740e1d32542203b83e650403f3e50
│  │  ├─ e4
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e7
│  │  │  ├─ ab370edd5fe838757ffd3bdecd1f449ba3d705
│  │  │  ├─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  │  └─ f9d8fd92465bea17fa45c107453cda59e01d9b
│  │  ├─ ea
│  │  │  └─ 9d0cd8255683d84f125948115daf1de0f06b1f
│  │  ├─ eb
│  │  │  └─ 88613d0932f24942071f3617475d6c079e64cf
│  │  ├─ ee
│  │  │  └─ 163eb9c89ce34ecd8df72fe9be07331295b748
│  │  ├─ f2
│  │  │  └─ fa4ee762ad527704ce18a97b4ff5f9627bac65
│  │  ├─ f4
│  │  │  └─ f4e17c71cd8dc2de7fc914c4857d532c7d1569
│  │  ├─ fc
│  │  │  ├─ 9e753c97be4643584f586f3f5b2f707e5f11de
│  │  │  └─ f369fc4517a70e0a7a7afd82afe08144c50250
│  │  ├─ fd
│  │  │  ├─ 5a70dfbfde397a27255a304ca9dd3a09201829
│  │  │  └─ a639c4f6dd3638ea48f3db72a2896fe7cb6c66
│  │  ├─ ff
│  │  │  └─ f2b174caa53cf1d22f09adea2069fbfdb035a5
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ Comment.tsx
│  │  ├─ MovieList.css
│  │  ├─ MovieList.tsx
│  │  └─ Navbar.tsx
│  ├─ data.json
│  ├─ hooks
│  │  └─ useFetchMovies.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ FavoritePage.tsx
│  │  ├─ HomePage.tsx
│  │  ├─ LoginPage.tsx
│  │  └─ SignupPage.tsx
│  ├─ redux
│  │  ├─ slices
│  │  │  ├─ authSlice.ts
│  │  │  └─ movieSlice.ts
│  │  └─ store.ts
│  ├─ utils
│  │  └─ localforage.ts
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```