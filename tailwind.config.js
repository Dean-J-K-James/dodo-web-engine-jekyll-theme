module.exports = {
    content: ["./_site/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Arial"'],
                text: ['"Segoe UI"']
            },
            colors: {
                'cook': '#1F1F1F',
                'cook-text': '#C9C9C9',
                'cook-accent': '#333333',
                'cook-accent-text': '#C9C9C9',
                'menu': '#FFFFFF',
                'menu-text': '#515151',
                'menu-accent': '#DDE7FB',
                'menu-accent-text': '#4279CE',
                'foot': '#FFFFFF',
                'foot-text': '#515151',
                'foot-accent': '#DDE7FB',
                'foot-accent-text': '#4279CE',
                'body': '#F1F1F1',
                'body-accent': '#FFFFFF',
                'divider': '#C9C9C9'
            },
        }
    }
}