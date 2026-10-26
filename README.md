# EUA Afora (Around the U.S.) — React

Projeto 13 do curso de desenvolvimento web da TripleTen. Esta é a primeira etapa da migração do site "EUA Afora" para React.

## Funcionalidades

- Perfil do usuário e lista de cartões renderizados com componentes React
- Popups de editar perfil, alterar foto, novo local, imagem ampliada e confirmação de exclusão
- Abertura e fechamento dos popups controlados com o hook `useState`
- Cartões criados a partir de dados fictícios (a API será conectada nos próximos sprints)

## Tecnologias

- React
- Vite
- JavaScript (JSX)
- HTML5 e CSS3 (metodologia BEM)

## Estrutura de componentes

```
src/components
├── App.jsx
├── Header/Header.jsx
├── Footer/Footer.jsx
└── Main
    ├── Main.jsx
    └── components
        ├── Card/Card.jsx
        └── Popup
            ├── Popup.jsx
            └── components
                ├── NewCard
                ├── EditProfile
                ├── EditAvatar
                ├── ImagePopup
                └── RemoveCard
```

## Como executar

```bash
npm install
npm run dev
```

O projeto abre em `http://localhost:3000`.
