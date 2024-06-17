class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html" class="header-title">hsal-o</a>
            <div class="nav-links" id="navLinks">
                <ul>
                    <li><a href="/index.html" class="nav-link-title">HOME</a></li>
                    <li><a href="/pages/about/index.html" class="nav-link-title">ABOUT</a></li>

                    <li><a href="/pages/experience/index.html" class="nav-link-title">EXPERIENCE</a></li>
                    <li><a href="/pages/education/index.html" class="nav-link-title">EDUCATION</a></li>

                    <li><a href="/pages/projects/index.html" class="nav-link-title">PROJECTS</a></li>
                </ul>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);