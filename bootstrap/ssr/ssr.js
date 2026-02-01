import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-BbdJqoHD.js"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-7FhMzsDU.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-BatXZ4bz.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-chJGtfPG.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-Cp_YP-bw.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-CME5A1KQ.js"), "./Pages/Cart/Index.vue": () => import("./assets/Index-CazPk0eN.js"), "./Pages/Catalog/Game.vue": () => import("./assets/Game-98Dat5UT.js"), "./Pages/Checkout/Index.vue": () => import("./assets/Index-CxL9tno9.js"), "./Pages/Contact/Show.vue": () => import("./assets/Show-4C1tVg5e.js"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-CzwXXr6Z.js"), "./Pages/Games/Index.vue": () => import("./assets/Index-D95F8_yy.js"), "./Pages/Pages/Show.vue": () => import("./assets/Show-CUnJGZ0L.js"), "./Pages/Posts/Index.vue": () => import("./assets/Index-Bmn2khE2.js"), "./Pages/Posts/Show.vue": () => import("./assets/Show-CfElDyko.js"), "./Pages/Product/Show.vue": () => import("./assets/Show-DrgdWKR1.js"), "./Pages/Profile/Edit.vue": () => import("./assets/Edit-C0xJlTUB.js"), "./Pages/Profile/Orders/Index.vue": () => import("./assets/Index-BpEgMqOB.js"), "./Pages/Profile/Orders/Show.vue": () => import("./assets/Show-BFGqMhiP.js"), "./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-DOJRjafs.js"), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-Bh9Xj-iW.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-BiE5nbni.js"), "./Pages/Reviews/Create.vue": () => import("./assets/Create-DaU9xvja.js"), "./Pages/Reviews/Index.vue": () => import("./assets/Index-CCQ7kcQJ.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-Dv90OjiI.js"), "./Pages/Workflow/Index.vue": () => import("./assets/Index-D-DZ0sey.js") })),
    setup: ({ App, props, plugin }) => {
      props.initialPage.props.ziggy;
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, props.initialPage.props.ziggy);
    }
  })
);
