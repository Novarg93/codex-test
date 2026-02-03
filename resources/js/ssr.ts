import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";
import { ZiggyVue } from "ziggy-js";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob("./Pages/**/*.vue"),
            ),
        setup: ({ App, props, plugin }) => {
            const ziggy = props.initialPage.props.ziggy;

            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, ziggy);
        },
    }),
);
