:root {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
    --accent-color: #2a9df4;
}

body.dark {
    --bg-color: #1a1a1a;
    --text-color: #f0f0f0;
    --accent-color: #4da6ff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s, color 0.3s;
    padding: 20px;
}

.theme-switch {
    position: fixed;
    top: 10px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
}

section {
    margin: 60px auto;
    max-width: 800px;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 15px;
}

p {
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.social-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.social-icons a {
    text-decoration: none;
    color: var(--accent-color);
    font-weight: bold;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #ff9900;
}

/* Theme toggle switch */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--accent-color);
}

input:checked + .slider:before {
    transform: translateX(26px);
}
