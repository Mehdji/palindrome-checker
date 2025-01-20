# 🔄 Palindrome Checker

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/yourusername/palindrome-checker/issues)

A web-based palindrome checker built with vanilla JavaScript that determines if your text reads the same forwards and backwards.

<div align="center">
  <img src="/api/placeholder/800/400" alt="Palindrome Checker Demo">
</div>

## ✨ Features

- 🚀 Real-time palindrome checking
- 🔤 Case-insensitive comparison
- ⚡ Ignores spaces and punctuation
- 📱 Responsive design
- 🎨 Visual feedback on results

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/palindrome-checker.git
   ```

2. Navigate to the project directory
   ```sh
   cd palindrome-checker
   ```

3. Open `index.html` in your browser
   ```sh
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

## 💡 Usage

1. Enter your text in the input field
2. See instant results as you type
3. Try these examples:
   ```
   A man, a plan, a canal: Panama
   race a car
   Was it a car or a cat I saw?
   ```

## 🔍 How It Works

```javascript
function isPalindrome(text) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare with reversed version
    return cleanText === cleanText.split('').reverse().join('');
}
```

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

Your Name - [@yourtwitter](https://twitter.com/Mehdji87) - naouimehdi@hotmail.fr

Project Link: [https://github.com/mehdji/palindrome-checker](https://github.com/mehdji/palindrome-checker)

## 🙏 Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/mehdji">Mehdji</a>
</div>
