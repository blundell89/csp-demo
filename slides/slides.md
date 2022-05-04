---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
html: true
---

# CSP Demo

What's this CSP thing anyway?

---

# A definition


> Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft, to site defacement, to malware distribution.

<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank">MDN</a>

---

# Let's see it in action

DEMO!

---

# Directives used

- font-src
- style-src
- default-src fallback
- Other directives can be found here: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives" target="_blank">MDN CSP directives</a>

---
<style scoped>section { font-size: 1rem; }</style>

# Stricter CSPs

## Strict CSPs vs Allowlist CSPs

By specifying sources in our CSP we have created an _allowlist CSP_. What if that domain was compromised or third parties can upload to the domain? It's beyond our control. An allowlist CSP also requires lots of customization.

To achieve a strict CSP, you can make use of hashes and/or nonces and [load scripts dynamically](https://web.dev/strict-csp/#load-sourced-scripts-dynamically).

_Source: https://web.dev/strict-csp/#why-a-strict-csp-is-recommended-over-allowlist-csps_

## Hashes
If we had some content such as

```javascript
<script>doSomething();</script>
```

embedded into our page that didn't allow `unsafe-inline` for scripts, we could generate a hash for `doSomething()` and append it to our `script-src` directive, like: `script-src 'sha256-RFWPLDbv2BY+rCkDzsE+0fr8ylGr2R2faWMhq4lfEQc=';`.

CSP hashes are well suited for scripts that are served on static websites (such as a React app served from a CDN). The CSP would need to be updated with the latest hashes if any scripts had changed.

_Source: https://content-security-policy.com/hash/_

## Nonces

For pages rendered on the server we can create a new nonce for each HTTP request to ensure that content has originated from our own application.

_Source: https://content-security-policy.com/nonce/_

---

# Enforcing a CSP in Prod

- Introducing a CSP to an application that is already in production could be seen as risky
- What if you've missed a directive that should be there
- CSPs have a _report only_ mode that can be enabled by changing the header/meta name to _Content-Security-Policy-Report-Only_
- A report-uri can be specified to record violations without erroring

---

# Extra tools

- Google's [CSP Evalulator](https://csp-evaluator.withgoogle.com/) is a good tool for validating how secure your CSP is.
- [Report-URI](https://report-uri.com/)