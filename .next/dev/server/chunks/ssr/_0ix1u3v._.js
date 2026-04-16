module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/login.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Login",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-ssr] (ecmascript) <export default as ChefHat>");
"use client";
;
;
;
;
;
;
function Login({ onLogin }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name.trim() && email.trim()) {
            onLogin(name.trim(), email.trim());
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full bg-primary p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                                    className: "w-12 h-12 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/login.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/login.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/login.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-balance text-foreground",
                            children: "Recipe Genie"
                        }, void 0, false, {
                            fileName: "[project]/components/login.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground text-balance",
                            children: "Discover delicious recipes from ingredients you already have"
                        }, void 0, false, {
                            fileName: "[project]/components/login.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Welcome"
                                }, void 0, false, {
                                    fileName: "[project]/components/login.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Enter your details to get started"
                                }, void 0, false, {
                                    fileName: "[project]/components/login.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/login.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "text-sm font-medium",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                type: "text",
                                                placeholder: "Your name",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                required: true,
                                                className: "h-11"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "text-sm font-medium",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "email",
                                                type: "email",
                                                placeholder: "your@email.com",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                required: true,
                                                className: "h-11"
                                            }, void 0, false, {
                                                fileName: "[project]/components/login.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/login.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full h-11 text-base",
                                        size: "lg",
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/components/login.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/login.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/login.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/login.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/login.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/login.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/recipes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allIngredients",
    ()=>allIngredients,
    "recipes",
    ()=>recipes
]);
const recipes = [
    {
        id: "1",
        name: "Classic Chicken Pasta",
        ingredients: [
            "chicken breast",
            "pasta",
            "garlic cloves",
            "olive oil",
            "parmesan cheese",
            "salt",
            "black pepper"
        ],
        instructions: [
            "Boil water in a large pot and add a pinch of salt. Cook pasta according to package directions until al dente.",
            "While pasta cooks, season chicken breasts with salt and black pepper.",
            "Heat olive oil in a skillet over medium heat, add minced garlic, and sauté until fragrant.",
            "Add chicken and cook for 6-7 minutes per side until fully cooked.",
            "Drain pasta and toss with the cooked chicken and garlic olive oil mixture.",
            "Grate parmesan on top and serve immediately."
        ]
    },
    {
        id: "2",
        name: "Tomato Basil Soup",
        ingredients: [
            "tomatoes",
            "onion",
            "garlic cloves",
            "fresh basil",
            "cream",
            "salt",
            "black pepper",
            "olive oil"
        ],
        instructions: [
            "Chop tomatoes, onion, and garlic.",
            "Heat olive oil in a pot and sauté onions and garlic until soft.",
            "Add chopped tomatoes and cook for 20 minutes until tender.",
            "Blend the mixture until smooth using a blender or immersion blender.",
            "Return to heat, stir in cream, and season with salt, black pepper, and fresh basil.",
            "Simmer for 5 more minutes and serve hot."
        ]
    },
    {
        id: "3",
        name: "Veggie Stir Fry",
        ingredients: [
            "broccoli",
            "carrots",
            "soy sauce",
            "ginger",
            "garlic",
            "vegetable oil",
            "cooked rice",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook rice according to package directions and set aside.",
            "Chop broccoli and carrots into bite-sized pieces.",
            "Heat oil in a wok, add minced garlic and ginger, and sauté for 1 minute.",
            "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
            "Add soy sauce, salt, and pepper to taste.",
            "Serve stir-fried vegetables over rice."
        ]
    },
    {
        id: "4",
        name: "Beef Tacos",
        ingredients: [
            "ground beef",
            "taco shells",
            "lettuce",
            "cheese",
            "salsa",
            "taco seasoning",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C) to warm taco shells.",
            "Brown ground beef in a skillet over medium heat.",
            "Add taco seasoning, a pinch of salt, and pepper. Stir well and cook for 5 minutes.",
            "Place taco shells in the oven for 5 minutes to warm.",
            "Fill each shell with cooked beef, shredded lettuce, cheese, and salsa.",
            "Serve immediately while warm."
        ]
    },
    {
        id: "5",
        name: "Mushroom Risotto",
        ingredients: [
            "arborio rice",
            "mushrooms",
            "onion",
            "white wine",
            "vegetable broth",
            "parmesan",
            "butter",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil and butter in a pan. Sauté chopped onions and mushrooms until golden brown.",
            "Add arborio rice and toast for 2 minutes while stirring.",
            "Pour in white wine and let it absorb into the rice.",
            "Gradually add warm vegetable broth, one ladle at a time, stirring constantly.",
            "Continue adding broth until rice is creamy and cooked through.",
            "Stir in parmesan cheese, season with salt and pepper, and serve hot."
        ]
    },
    {
        id: "6",
        name: "Greek Salad",
        ingredients: [
            "cucumber",
            "tomatoes",
            "feta cheese",
            "olives",
            "olive oil",
            "oregano",
            "salt",
            "pepper"
        ],
        instructions: [
            "Chop cucumber and tomatoes into bite-sized pieces.",
            "Combine chopped vegetables with olives in a salad bowl.",
            "Crumble feta cheese on top.",
            "Drizzle with olive oil, sprinkle oregano, salt, and pepper.",
            "Toss gently and serve immediately."
        ]
    },
    {
        id: "7",
        name: "Salmon with Lemon",
        ingredients: [
            "salmon fillets",
            "lemon",
            "butter",
            "garlic cloves",
            "fresh dill",
            "salt",
            "pepper"
        ],
        instructions: [
            "Season salmon fillets with salt and pepper.",
            "Heat butter in a skillet over medium heat and sauté minced garlic for 1 minute.",
            "Add salmon fillets, skin-side down, and cook for 4-5 minutes per side until fully cooked.",
            "Squeeze fresh lemon juice over salmon and garnish with chopped dill.",
            "Serve immediately."
        ]
    },
    {
        id: "8",
        name: "Egg Fried Rice",
        ingredients: [
            "cooked rice",
            "eggs",
            "peas",
            "carrots",
            "soy sauce",
            "vegetable oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat oil in a wok or skillet.",
            "Scramble eggs in the pan and remove once cooked.",
            "Add diced carrots and peas, sauté for 2-3 minutes.",
            "Add cold cooked rice and stir-fry for 5 minutes.",
            "Return scrambled eggs to the pan and add soy sauce, salt, and pepper.",
            "Mix well and serve hot."
        ]
    },
    {
        id: "9",
        name: "Margherita Pizza",
        ingredients: [
            "pizza dough",
            "tomatoes",
            "mozzarella cheese",
            "basil leaves",
            "olive oil",
            "salt"
        ],
        instructions: [
            "Preheat oven to 450°F (230°C).",
            "Roll out pizza dough on a baking sheet or pizza stone.",
            "Brush dough with olive oil and sprinkle a pinch of salt.",
            "Add sliced tomatoes and mozzarella cheese on top.",
            "Bake for 12-15 minutes until crust is golden and cheese is melted.",
            "Garnish with fresh basil leaves and serve hot."
        ]
    },
    {
        id: "10",
        name: "Chicken Curry",
        ingredients: [
            "chicken pieces",
            "curry powder",
            "coconut milk",
            "onion",
            "garlic",
            "vegetable oil",
            "rice",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook rice according to package directions and set aside.",
            "Heat oil in a pan, sauté chopped onions and garlic until soft.",
            "Add chicken pieces and brown on all sides.",
            "Add curry powder, coconut milk, salt, and pepper. Stir well.",
            "Simmer for 15-20 minutes until chicken is fully cooked.",
            "Serve chicken curry over cooked rice."
        ]
    },
    {
        id: "11",
        name: "Avocado Toast",
        ingredients: [
            "bread slices",
            "ripe avocado",
            "lemon juice",
            "eggs",
            "salt",
            "black pepper",
            "olive oil"
        ],
        instructions: [
            "Toast bread slices until golden and crispy.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread avocado evenly on toast.",
            "Fry eggs to your preferred doneness and place on top of avocado.",
            "Drizzle with olive oil and serve immediately."
        ]
    },
    {
        id: "12",
        name: "Pancakes",
        ingredients: [
            "flour",
            "eggs",
            "milk",
            "butter",
            "maple syrup",
            "baking powder",
            "salt",
            "sugar"
        ],
        instructions: [
            "In a bowl, mix flour, baking powder, sugar, and salt.",
            "In another bowl, whisk eggs and milk together.",
            "Combine wet and dry ingredients to form a smooth batter.",
            "Heat butter in a pan over medium heat. Pour batter to form pancakes.",
            "Cook 2-3 minutes per side until golden brown.",
            "Stack pancakes and drizzle with maple syrup before serving."
        ]
    },
    {
        id: "13",
        name: "Shrimp Scampi",
        ingredients: [
            "shrimp",
            "garlic cloves",
            "butter",
            "white wine",
            "pasta",
            "parsley",
            "lemon juice",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook pasta according to package directions.",
            "Melt butter in a skillet and sauté minced garlic for 1-2 minutes.",
            "Add shrimp, salt, and pepper, and cook until pink.",
            "Pour in white wine and simmer for 2 minutes.",
            "Toss pasta with shrimp mixture and sprinkle parsley and lemon juice before serving."
        ]
    },
    {
        id: "14",
        name: "Caprese Sandwich",
        ingredients: [
            "bread slices",
            "mozzarella cheese",
            "tomatoes",
            "basil leaves",
            "balsamic vinegar",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Slice mozzarella and tomatoes evenly.",
            "Layer mozzarella and tomato slices on bread slices.",
            "Add fresh basil leaves and drizzle with olive oil and balsamic vinegar.",
            "Season with salt and pepper.",
            "Close sandwich and serve immediately."
        ]
    },
    {
        id: "15",
        name: "Chocolate Chip Cookies",
        ingredients: [
            "flour",
            "butter",
            "sugar",
            "brown sugar",
            "eggs",
            "vanilla extract",
            "chocolate chips",
            "baking soda",
            "salt"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Cream together butter, sugar, and brown sugar until fluffy.",
            "Add eggs and vanilla extract, mix well.",
            "Stir in flour, baking soda, and salt until combined.",
            "Fold in chocolate chips.",
            "Drop spoonfuls of dough on a baking sheet and bake for 10-12 minutes until golden brown."
        ]
    },
    {
        id: "16",
        name: "Pulled Pork Sandwich",
        ingredients: [
            "pork shoulder",
            "bbq sauce",
            "bread rolls",
            "coleslaw",
            "onion",
            "salt",
            "pepper"
        ],
        instructions: [
            "Season pork with salt and pepper.",
            "Slow cook pork with BBQ sauce for 6-8 hours until tender.",
            "Shred pork with forks and mix with remaining BBQ sauce.",
            "Serve on toasted bread rolls with coleslaw and sliced onions."
        ]
    },
    {
        id: "17",
        name: "Caesar Salad",
        ingredients: [
            "romaine lettuce",
            "parmesan cheese",
            "croutons",
            "caesar dressing",
            "lemon juice",
            "salt",
            "pepper"
        ],
        instructions: [
            "Chop romaine lettuce into bite-sized pieces.",
            "In a large bowl, toss lettuce with Caesar dressing and lemon juice.",
            "Add parmesan cheese shavings and croutons on top.",
            "Season with salt and pepper to taste and serve immediately."
        ]
    },
    {
        id: "18",
        name: "Thai Green Curry",
        ingredients: [
            "chicken breast",
            "green curry paste",
            "coconut milk",
            "bell peppers",
            "vegetable oil",
            "rice",
            "salt"
        ],
        instructions: [
            "Cook rice according to package instructions.",
            "Heat oil in a pan and sauté green curry paste for 1 minute.",
            "Add chicken pieces and cook until slightly browned.",
            "Pour in coconut milk and add sliced bell peppers.",
            "Simmer for 15 minutes until chicken is cooked and vegetables are tender.",
            "Serve curry over rice."
        ]
    },
    {
        id: "19",
        name: "French Toast",
        ingredients: [
            "bread slices",
            "eggs",
            "milk",
            "cinnamon powder",
            "butter",
            "maple syrup",
            "salt"
        ],
        instructions: [
            "Whisk eggs, milk, cinnamon, and a pinch of salt in a bowl.",
            "Dip bread slices into egg mixture until fully coated.",
            "Heat butter in a pan over medium heat and cook bread slices 2-3 minutes per side until golden.",
            "Serve hot with maple syrup."
        ]
    },
    {
        id: "20",
        name: "Spinach Quiche",
        ingredients: [
            "pie crust",
            "eggs",
            "spinach",
            "cheese",
            "cream",
            "salt",
            "pepper",
            "nutmeg"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C) and press pie crust into a quiche pan.",
            "Cook spinach until wilted and squeeze out excess water.",
            "In a bowl, whisk eggs, cream, cheese, salt, pepper, and a pinch of nutmeg.",
            "Add spinach to egg mixture and pour into crust.",
            "Bake for 35-40 minutes until set and golden on top.",
            "Allow to cool slightly before slicing and serving."
        ]
    },
    {
        id: "21",
        name: "Spaghetti Carbonara",
        ingredients: [
            "spaghetti",
            "eggs",
            "bacon",
            "parmesan cheese",
            "black pepper",
            "salt",
            "olive oil"
        ],
        instructions: [
            "Cook spaghetti in salted boiling water until al dente.",
            "While pasta cooks, dice bacon and fry in a pan with a little olive oil until crispy.",
            "In a bowl, whisk eggs and grated parmesan together.",
            "Drain spaghetti, reserving ½ cup of pasta water.",
            "Quickly toss hot spaghetti with egg-parmesan mixture and crispy bacon. Add pasta water as needed for creaminess.",
            "Season with black pepper and serve immediately."
        ]
    },
    {
        id: "22",
        name: "Chicken Fajitas",
        ingredients: [
            "chicken breast",
            "bell peppers",
            "onion",
            "tortillas",
            "fajita seasoning",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Slice chicken, bell peppers, and onion into thin strips.",
            "Heat olive oil in a skillet over medium heat.",
            "Add chicken and season with fajita seasoning, salt, and pepper. Cook until browned and cooked through.",
            "Add vegetables and sauté for 5 minutes until slightly tender.",
            "Warm tortillas in a pan or microwave.",
            "Serve chicken and vegetables in tortillas."
        ]
    },
    {
        id: "23",
        name: "Vegetable Lasagna",
        ingredients: [
            "lasagna noodles",
            "tomato sauce",
            "zucchini",
            "spinach",
            "ricotta cheese",
            "mozzarella cheese",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Slice zucchini thinly and sauté with olive oil for 3-4 minutes.",
            "Boil lasagna noodles until al dente and drain.",
            "Layer a baking dish with tomato sauce, noodles, ricotta, sautéed zucchini, spinach, and mozzarella.",
            "Repeat layers until ingredients are finished, ending with mozzarella on top.",
            "Bake for 35-40 minutes until cheese is golden and bubbly.",
            "Let rest 10 minutes before serving."
        ]
    },
    {
        id: "24",
        name: "Beef Stroganoff",
        ingredients: [
            "beef strips",
            "mushrooms",
            "onion",
            "sour cream",
            "beef broth",
            "butter",
            "flour",
            "egg noodles",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook egg noodles according to package directions and set aside.",
            "Melt butter in a skillet and sauté onions and mushrooms until tender.",
            "Add beef strips and cook until browned.",
            "Sprinkle flour over beef mixture and stir for 1 minute.",
            "Add beef broth gradually, stirring until sauce thickens.",
            "Remove from heat, stir in sour cream, season with salt and pepper.",
            "Serve beef stroganoff over noodles."
        ]
    },
    {
        id: "25",
        name: "Lemon Garlic Shrimp",
        ingredients: [
            "shrimp",
            "garlic cloves",
            "butter",
            "lemon juice",
            "parsley",
            "salt",
            "pepper"
        ],
        instructions: [
            "Peel and devein shrimp if needed.",
            "Melt butter in a skillet and sauté minced garlic for 1 minute.",
            "Add shrimp and cook 2-3 minutes per side until pink and opaque.",
            "Squeeze fresh lemon juice over shrimp and season with salt and pepper.",
            "Garnish with chopped parsley and serve immediately."
        ]
    },
    {
        id: "26",
        name: "Quinoa Salad",
        ingredients: [
            "quinoa",
            "cucumber",
            "tomatoes",
            "feta cheese",
            "olive oil",
            "lemon juice",
            "salt",
            "pepper",
            "fresh parsley"
        ],
        instructions: [
            "Cook quinoa according to package directions and let cool.",
            "Chop cucumber, tomatoes, and parsley.",
            "In a large bowl, combine quinoa, vegetables, and crumbled feta cheese.",
            "Drizzle with olive oil and lemon juice, season with salt and pepper.",
            "Toss gently and serve chilled or at room temperature."
        ]
    },
    {
        id: "27",
        name: "Buffalo Chicken Wings",
        ingredients: [
            "chicken wings",
            "hot sauce",
            "butter",
            "garlic powder",
            "salt",
            "pepper",
            "celery sticks"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Season wings with salt, pepper, and garlic powder.",
            "Bake wings on a tray for 40-45 minutes until crispy, turning halfway through.",
            "In a small saucepan, melt butter and mix with hot sauce.",
            "Toss baked wings in the sauce until evenly coated.",
            "Serve with celery sticks on the side."
        ]
    },
    {
        id: "28",
        name: "Pesto Pasta",
        ingredients: [
            "pasta",
            "basil leaves",
            "parmesan cheese",
            "pine nuts",
            "olive oil",
            "garlic cloves",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook pasta according to package directions until al dente.",
            "In a food processor, blend basil leaves, garlic, pine nuts, and parmesan cheese.",
            "Slowly add olive oil while blending to form a smooth pesto sauce.",
            "Toss pasta with pesto and season with salt and pepper to taste.",
            "Serve immediately, garnished with extra parmesan."
        ]
    },
    {
        id: "29",
        name: "Berry Smoothie",
        ingredients: [
            "strawberries",
            "blueberries",
            "banana",
            "yogurt",
            "honey",
            "ice cubes"
        ],
        instructions: [
            "Wash berries thoroughly and slice banana.",
            "Place all ingredients in a blender: strawberries, blueberries, banana, yogurt, honey, and ice cubes.",
            "Blend until smooth and creamy.",
            "Pour into glasses and serve chilled."
        ]
    },
    {
        id: "30",
        name: "Chicken Alfredo",
        ingredients: [
            "fettuccine pasta",
            "chicken breast",
            "heavy cream",
            "parmesan cheese",
            "butter",
            "garlic cloves",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Cook fettuccine pasta according to package instructions.",
            "Season chicken with salt and pepper and cook in olive oil until golden and cooked through. Slice thinly.",
            "In a pan, melt butter and sauté minced garlic for 1 minute.",
            "Add heavy cream and simmer for 3-4 minutes.",
            "Stir in parmesan cheese until sauce thickens.",
            "Toss pasta with Alfredo sauce and top with sliced chicken before serving."
        ]
    },
    {
        id: "31",
        name: "Vegetable Curry",
        ingredients: [
            "potatoes",
            "carrots",
            "peas",
            "onion",
            "coconut milk",
            "curry powder",
            "garlic",
            "ginger",
            "salt",
            "oil"
        ],
        instructions: [
            "Chop all vegetables into bite-sized pieces.",
            "Heat oil in a pan, sauté onions, garlic, and ginger until fragrant.",
            "Add curry powder and cook for 1 minute.",
            "Add vegetables and stir to coat with spices.",
            "Pour in coconut milk, bring to simmer, cover, and cook 15-20 minutes until vegetables are tender.",
            "Serve hot with rice."
        ]
    },
    {
        id: "32",
        name: "Teriyaki Chicken",
        ingredients: [
            "chicken thighs",
            "soy sauce",
            "brown sugar",
            "garlic",
            "ginger",
            "cornstarch",
            "vegetable oil",
            "green onions"
        ],
        instructions: [
            "Mix soy sauce, brown sugar, minced garlic, and ginger to make teriyaki sauce.",
            "Heat oil in a skillet and cook chicken until browned and cooked through.",
            "Pour sauce over chicken and simmer for 5 minutes.",
            "Mix cornstarch with a little water and add to pan to thicken sauce.",
            "Garnish with sliced green onions and serve."
        ]
    },
    {
        id: "33",
        name: "Stuffed Bell Peppers",
        ingredients: [
            "bell peppers",
            "ground beef",
            "rice",
            "onion",
            "tomato sauce",
            "cheese",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cut tops off bell peppers and remove seeds.",
            "Cook ground beef with chopped onions until browned.",
            "Mix beef with cooked rice and season with salt and pepper.",
            "Stuff mixture into bell peppers, top with tomato sauce and cheese.",
            "Bake for 25-30 minutes until peppers are tender and cheese is melted."
        ]
    },
    {
        id: "34",
        name: "Garlic Butter Mushrooms",
        ingredients: [
            "mushrooms",
            "butter",
            "garlic cloves",
            "parsley",
            "salt",
            "pepper"
        ],
        instructions: [
            "Clean mushrooms and slice if large.",
            "Melt butter in a skillet and sauté minced garlic for 1 minute.",
            "Add mushrooms and cook until golden brown, stirring occasionally.",
            "Season with salt and pepper and garnish with chopped parsley.",
            "Serve as a side dish."
        ]
    },
    {
        id: "35",
        name: "Baked Ziti",
        ingredients: [
            "ziti pasta",
            "tomato sauce",
            "ricotta cheese",
            "mozzarella cheese",
            "parmesan cheese",
            "olive oil",
            "garlic",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cook ziti pasta according to package directions and drain.",
            "Heat olive oil and sauté minced garlic briefly, then mix with tomato sauce.",
            "Layer pasta, ricotta, tomato sauce, and mozzarella in a baking dish.",
            "Top with parmesan and bake for 25-30 minutes until golden.",
            "Serve hot."
        ]
    },
    {
        id: "36",
        name: "Chicken Teriyaki Stir Fry",
        ingredients: [
            "chicken breast",
            "broccoli",
            "carrots",
            "bell peppers",
            "soy sauce",
            "honey",
            "garlic",
            "ginger",
            "olive oil"
        ],
        instructions: [
            "Slice chicken and vegetables into thin strips.",
            "Mix soy sauce, honey, minced garlic, and ginger to make sauce.",
            "Heat oil in a skillet or wok, cook chicken until nearly done.",
            "Add vegetables and stir-fry for 5-6 minutes.",
            "Pour sauce over chicken and vegetables, cook 2 more minutes.",
            "Serve hot over rice or noodles."
        ]
    },
    {
        id: "37",
        name: "Omelette with Vegetables",
        ingredients: [
            "eggs",
            "milk",
            "bell peppers",
            "onion",
            "spinach",
            "cheese",
            "salt",
            "pepper",
            "butter"
        ],
        instructions: [
            "Beat eggs with a splash of milk, salt, and pepper.",
            "Heat butter in a skillet and sauté chopped vegetables until tender.",
            "Pour eggs over vegetables and cook on medium heat until edges set.",
            "Sprinkle cheese on top and fold omelette in half.",
            "Cook 1-2 more minutes and serve immediately."
        ]
    },
    {
        id: "38",
        name: "Shrimp Fried Rice",
        ingredients: [
            "shrimp",
            "cooked rice",
            "eggs",
            "peas",
            "carrots",
            "soy sauce",
            "vegetable oil",
            "garlic",
            "green onions"
        ],
        instructions: [
            "Heat oil in a skillet or wok and sauté minced garlic.",
            "Add shrimp and cook until pink, then remove and set aside.",
            "Add beaten eggs and scramble, then mix in cooked rice, peas, and carrots.",
            "Return shrimp to the pan, add soy sauce, and stir-fry for 3-4 minutes.",
            "Garnish with sliced green onions and serve hot."
        ]
    },
    {
        id: "39",
        name: "Baked Salmon with Herbs",
        ingredients: [
            "salmon fillets",
            "olive oil",
            "lemon",
            "garlic",
            "thyme",
            "rosemary",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place salmon fillets on a baking sheet lined with parchment paper.",
            "Drizzle with olive oil, squeeze lemon juice, sprinkle minced garlic, thyme, rosemary, salt, and pepper.",
            "Bake for 12-15 minutes until salmon is cooked through.",
            "Serve with lemon wedges."
        ]
    },
    {
        id: "40",
        name: "Classic BLT Sandwich",
        ingredients: [
            "bread slices",
            "bacon",
            "lettuce",
            "tomato",
            "mayonnaise",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook bacon until crispy and drain on paper towels.",
            "Toast bread slices lightly.",
            "Spread mayonnaise on each slice.",
            "Layer lettuce, tomato slices, and bacon on one slice of bread.",
            "Top with the other slice of bread, cut in half, and serve."
        ]
    },
    {
        id: "41",
        name: "Beef and Broccoli Stir Fry",
        ingredients: [
            "beef strips",
            "broccoli florets",
            "soy sauce",
            "garlic",
            "ginger",
            "cornstarch",
            "vegetable oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Mix soy sauce, cornstarch, and a little water to make a sauce.",
            "Heat oil in a wok over medium-high heat.",
            "Add beef and cook until browned, then remove from the wok.",
            "Add garlic and ginger, sauté 1 minute, then add broccoli and stir-fry 3-4 minutes.",
            "Return beef to the wok, pour sauce over, and stir until thickened.",
            "Season with salt and pepper and serve hot."
        ]
    },
    {
        id: "42",
        name: "Chicken Parmesan",
        ingredients: [
            "chicken breast",
            "breadcrumbs",
            "parmesan cheese",
            "mozzarella cheese",
            "egg",
            "flour",
            "tomato sauce",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Flatten chicken breasts, season with salt and pepper.",
            "Dredge chicken in flour, dip in beaten egg, then coat with breadcrumbs mixed with parmesan.",
            "Heat olive oil in a pan and fry chicken until golden brown on both sides.",
            "Place chicken in a baking dish, top with tomato sauce and mozzarella cheese.",
            "Bake for 20-25 minutes until cheese melts and chicken is cooked through."
        ]
    },
    {
        id: "43",
        name: "Vegetable Fried Noodles",
        ingredients: [
            "noodles",
            "carrots",
            "bell peppers",
            "cabbage",
            "soy sauce",
            "garlic",
            "ginger",
            "vegetable oil",
            "green onions",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook noodles according to package instructions and drain.",
            "Heat oil in a wok and sauté minced garlic and ginger for 1 minute.",
            "Add chopped vegetables and stir-fry for 5-6 minutes.",
            "Add noodles and soy sauce, tossing to combine.",
            "Season with salt and pepper, garnish with sliced green onions, and serve hot."
        ]
    },
    {
        id: "44",
        name: "Grilled Cheese Sandwich",
        ingredients: [
            "bread slices",
            "cheddar cheese",
            "butter"
        ],
        instructions: [
            "Heat a skillet over medium heat.",
            "Butter one side of each bread slice.",
            "Place one slice, butter side down, on the skillet, top with cheese, then another slice of bread butter side up.",
            "Cook until golden brown, flip, and cook the other side until cheese is melted.",
            "Serve immediately."
        ]
    },
    {
        id: "45",
        name: "Chicken Noodle Soup",
        ingredients: [
            "chicken breast",
            "carrots",
            "celery",
            "onion",
            "garlic",
            "egg noodles",
            "chicken broth",
            "salt",
            "pepper",
            "parsley"
        ],
        instructions: [
            "In a pot, heat oil and sauté onions, garlic, carrots, and celery for 5 minutes.",
            "Add chicken breast and chicken broth, bring to a boil.",
            "Reduce heat and simmer 20 minutes until chicken is cooked.",
            "Remove chicken, shred it, and return to the pot.",
            "Add egg noodles and cook according to package instructions.",
            "Season with salt, pepper, and garnish with parsley before serving."
        ]
    },
    {
        id: "46",
        name: "Stuffed Zucchini Boats",
        ingredients: [
            "zucchini",
            "ground beef",
            "tomato sauce",
            "onion",
            "garlic",
            "mozzarella cheese",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cut zucchini in half lengthwise and scoop out the center to create a boat.",
            "Sauté onion, garlic, and ground beef until cooked.",
            "Add tomato sauce and season with salt and pepper.",
            "Fill zucchini boats with meat mixture and top with mozzarella cheese.",
            "Bake for 20-25 minutes until zucchini is tender and cheese is melted."
        ]
    },
    {
        id: "47",
        name: "Beef Chili",
        ingredients: [
            "ground beef",
            "kidney beans",
            "tomato paste",
            "onion",
            "garlic",
            "chili powder",
            "cumin",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Heat olive oil in a large pot and sauté onions and garlic until soft.",
            "Add ground beef and cook until browned.",
            "Add tomato paste, kidney beans, chili powder, cumin, salt, and pepper.",
            "Simmer for 30-40 minutes, stirring occasionally.",
            "Serve hot, optionally with shredded cheese or sour cream."
        ]
    },
    {
        id: "48",
        name: "Caprese Salad",
        ingredients: [
            "tomatoes",
            "mozzarella cheese",
            "basil leaves",
            "olive oil",
            "balsamic glaze",
            "salt",
            "pepper"
        ],
        instructions: [
            "Slice tomatoes and mozzarella cheese into even slices.",
            "Arrange alternating slices of tomato and mozzarella on a plate.",
            "Tuck fresh basil leaves between slices.",
            "Drizzle olive oil and balsamic glaze on top.",
            "Season with salt and pepper and serve immediately."
        ]
    },
    {
        id: "49",
        name: "Teriyaki Salmon",
        ingredients: [
            "salmon fillets",
            "soy sauce",
            "honey",
            "garlic",
            "ginger",
            "olive oil",
            "lemon"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Mix soy sauce, honey, minced garlic, and ginger to make teriyaki sauce.",
            "Place salmon on a baking sheet and brush with sauce.",
            "Bake for 12-15 minutes until salmon is cooked through.",
            "Serve with a squeeze of lemon."
        ]
    },
    {
        id: "50",
        name: "Eggplant Parmesan",
        ingredients: [
            "eggplant",
            "breadcrumbs",
            "parmesan cheese",
            "mozzarella cheese",
            "tomato sauce",
            "egg",
            "flour",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Slice eggplant and sprinkle with salt to remove excess moisture for 30 minutes, then pat dry.",
            "Dredge eggplant in flour, dip in beaten egg, and coat with breadcrumbs mixed with parmesan.",
            "Fry eggplant slices in olive oil until golden.",
            "Layer eggplant, tomato sauce, and mozzarella in a baking dish.",
            "Bake for 20-25 minutes until cheese melts and golden brown."
        ]
    },
    {
        id: "51",
        name: "Chicken Tikka Masala",
        ingredients: [
            "chicken breast",
            "yogurt",
            "garam masala",
            "tomato puree",
            "cream",
            "garlic",
            "ginger",
            "onion",
            "vegetable oil",
            "salt"
        ],
        instructions: [
            "Marinate chicken in yogurt, garlic, ginger, and garam masala for at least 1 hour.",
            "Heat oil in a skillet and sauté chopped onions until golden.",
            "Add marinated chicken and cook until slightly browned.",
            "Add tomato puree and simmer 15 minutes.",
            "Stir in cream and cook for 5 more minutes.",
            "Serve hot with rice or naan."
        ]
    },
    {
        id: "52",
        name: "Shrimp Tacos",
        ingredients: [
            "shrimp",
            "taco shells",
            "cabbage",
            "lime",
            "cilantro",
            "sour cream",
            "garlic",
            "paprika",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Season shrimp with garlic, paprika, salt, and pepper.",
            "Heat olive oil in a skillet and cook shrimp until pink and opaque.",
            "Warm taco shells in a pan or oven.",
            "Fill tacos with shrimp, shredded cabbage, and drizzle with sour cream.",
            "Garnish with chopped cilantro and a squeeze of lime juice."
        ]
    },
    {
        id: "53",
        name: "Spinach and Feta Omelette",
        ingredients: [
            "eggs",
            "spinach",
            "feta cheese",
            "milk",
            "salt",
            "pepper",
            "butter"
        ],
        instructions: [
            "Beat eggs with a splash of milk, salt, and pepper.",
            "Heat butter in a skillet and sauté spinach until wilted.",
            "Pour eggs over spinach and cook on medium heat until partially set.",
            "Sprinkle feta cheese on top and fold omelette in half.",
            "Cook 1-2 minutes more and serve."
        ]
    },
    {
        id: "54",
        name: "Vegetable Soup",
        ingredients: [
            "carrots",
            "celery",
            "onion",
            "potatoes",
            "green beans",
            "tomato paste",
            "vegetable broth",
            "garlic",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Heat olive oil in a large pot, sauté onions, garlic, carrots, and celery for 5 minutes.",
            "Add potatoes, green beans, tomato paste, and vegetable broth.",
            "Bring to a boil, then simmer 25-30 minutes until vegetables are tender.",
            "Season with salt and pepper and serve hot."
        ]
    },
    {
        id: "55",
        name: "Garlic Butter Chicken",
        ingredients: [
            "chicken breast",
            "garlic",
            "butter",
            "olive oil",
            "salt",
            "pepper",
            "parsley"
        ],
        instructions: [
            "Season chicken with salt and pepper.",
            "Heat olive oil and butter in a skillet over medium heat.",
            "Add minced garlic and sauté 1 minute.",
            "Cook chicken until golden brown and fully cooked, 6-7 minutes per side.",
            "Garnish with chopped parsley and serve."
        ]
    },
    {
        id: "56",
        name: "Cheeseburger",
        ingredients: [
            "ground beef",
            "burger buns",
            "cheddar cheese",
            "lettuce",
            "tomato",
            "onion",
            "ketchup",
            "mustard",
            "salt",
            "pepper",
            "oil"
        ],
        instructions: [
            "Season ground beef with salt and pepper and form patties.",
            "Heat oil in a skillet and cook patties to desired doneness.",
            "Place cheddar cheese on patties during last minute of cooking to melt.",
            "Toast burger buns lightly.",
            "Assemble burgers with lettuce, tomato, onion, patties, and condiments."
        ]
    },
    {
        id: "57",
        name: "Pasta Primavera",
        ingredients: [
            "pasta",
            "zucchini",
            "bell peppers",
            "carrots",
            "garlic",
            "olive oil",
            "parmesan cheese",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook pasta according to package instructions and drain.",
            "Heat olive oil in a skillet and sauté garlic for 1 minute.",
            "Add chopped vegetables and cook 5-6 minutes until tender-crisp.",
            "Toss cooked pasta with vegetables, sprinkle with parmesan, and season with salt and pepper.",
            "Serve immediately."
        ]
    },
    {
        id: "58",
        name: "Baked Chicken Legs",
        ingredients: [
            "chicken legs",
            "olive oil",
            "garlic powder",
            "paprika",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Rub chicken legs with olive oil, garlic powder, paprika, salt, and pepper.",
            "Place on a baking tray and bake for 35-40 minutes until cooked through and skin is crispy.",
            "Serve hot."
        ]
    },
    {
        id: "59",
        name: "Lentil Soup",
        ingredients: [
            "lentils",
            "carrots",
            "celery",
            "onion",
            "garlic",
            "vegetable broth",
            "cumin",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Heat olive oil in a pot and sauté onions, garlic, carrots, and celery for 5 minutes.",
            "Add lentils, vegetable broth, and cumin.",
            "Bring to a boil, then simmer for 25-30 minutes until lentils are soft.",
            "Season with salt and pepper and serve hot."
        ]
    },
    {
        id: "60",
        name: "Pork Fried Rice",
        ingredients: [
            "pork",
            "cooked rice",
            "eggs",
            "peas",
            "carrots",
            "soy sauce",
            "garlic",
            "vegetable oil",
            "green onions",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat oil in a skillet and sauté minced garlic until fragrant.",
            "Add diced pork and cook until browned.",
            "Push pork to the side, scramble eggs in the pan.",
            "Add cooked rice, peas, and carrots, stir-fry 5 minutes.",
            "Add soy sauce, season with salt and pepper, garnish with green onions, and serve."
        ]
    },
    {
        id: "61",
        name: "Honey Garlic Chicken",
        ingredients: [
            "chicken breast",
            "honey",
            "garlic",
            "soy sauce",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Mix honey, minced garlic, and soy sauce in a small bowl to make the sauce.",
            "Season chicken with salt and pepper.",
            "Heat olive oil in a skillet and cook chicken until golden brown on both sides.",
            "Pour sauce over chicken and simmer for 5-7 minutes until cooked through and glazed.",
            "Serve with steamed rice or vegetables."
        ]
    },
    {
        id: "62",
        name: "Vegetable Quesadilla",
        ingredients: [
            "tortillas",
            "bell peppers",
            "onion",
            "cheddar cheese",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil in a pan and sauté sliced bell peppers and onions until tender.",
            "Place a tortilla in a skillet over medium heat.",
            "Sprinkle half of the tortilla with cheese and sautéed vegetables, fold over.",
            "Cook 2-3 minutes per side until golden and cheese melts.",
            "Cut into wedges and serve with salsa or sour cream."
        ]
    },
    {
        id: "63",
        name: "Beef Tacos with Salsa",
        ingredients: [
            "ground beef",
            "taco shells",
            "lettuce",
            "tomatoes",
            "onion",
            "cheddar cheese",
            "salsa",
            "taco seasoning",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil in a skillet and sauté ground beef with taco seasoning until fully cooked.",
            "Chop lettuce, tomatoes, and onion.",
            "Warm taco shells in oven or pan.",
            "Fill each shell with beef, vegetables, cheese, and top with salsa.",
            "Serve immediately."
        ]
    },
    {
        id: "64",
        name: "Coconut Shrimp",
        ingredients: [
            "shrimp",
            "coconut flakes",
            "flour",
            "eggs",
            "salt",
            "pepper",
            "oil for frying"
        ],
        instructions: [
            "Peel and devein shrimp, pat dry.",
            "Season flour with salt and pepper.",
            "Dip shrimp in flour, then beaten egg, and coat with coconut flakes.",
            "Heat oil in a skillet and fry shrimp until golden and crispy, 2-3 minutes per side.",
            "Drain on paper towels and serve with dipping sauce."
        ]
    },
    {
        id: "65",
        name: "Pasta Puttanesca",
        ingredients: [
            "spaghetti",
            "tomatoes",
            "olives",
            "capers",
            "garlic",
            "anchovy fillets",
            "olive oil",
            "red pepper flakes",
            "parsley",
            "salt"
        ],
        instructions: [
            "Cook spaghetti according to package instructions.",
            "Heat olive oil in a pan, sauté garlic, anchovies, and red pepper flakes until fragrant.",
            "Add chopped tomatoes, olives, and capers. Simmer 10 minutes.",
            "Toss cooked spaghetti with sauce and garnish with parsley.",
            "Serve hot."
        ]
    },
    {
        id: "66",
        name: "Chicken Caesar Wrap",
        ingredients: [
            "chicken breast",
            "tortilla wraps",
            "lettuce",
            "parmesan cheese",
            "caesar dressing",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Season chicken with salt and pepper and cook in olive oil until golden and cooked through.",
            "Chop lettuce and shred parmesan cheese.",
            "Warm tortillas, spread a layer of caesar dressing.",
            "Add cooked chicken, lettuce, and cheese, then roll up tightly.",
            "Serve immediately."
        ]
    },
    {
        id: "67",
        name: "Stuffed Mushrooms",
        ingredients: [
            "large mushrooms",
            "cream cheese",
            "garlic",
            "parmesan cheese",
            "breadcrumbs",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Remove mushroom stems and chop finely.",
            "Sauté stems with garlic in olive oil until soft.",
            "Mix sautéed stems with cream cheese, parmesan, breadcrumbs, salt, and pepper.",
            "Stuff mixture into mushroom caps and bake 15-20 minutes until golden.",
            "Serve hot."
        ]
    },
    {
        id: "68",
        name: "Teriyaki Beef Skewers",
        ingredients: [
            "beef cubes",
            "soy sauce",
            "honey",
            "garlic",
            "ginger",
            "bell peppers",
            "onion",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Mix soy sauce, honey, minced garlic, and ginger to make teriyaki sauce.",
            "Thread beef cubes and vegetables alternately onto skewers.",
            "Brush skewers with teriyaki sauce and marinate 30 minutes.",
            "Grill skewers 8-10 minutes, turning occasionally, until beef is cooked to desired doneness.",
            "Serve hot."
        ]
    },
    {
        id: "69",
        name: "Minestrone Soup",
        ingredients: [
            "carrots",
            "celery",
            "onion",
            "zucchini",
            "tomato paste",
            "cannellini beans",
            "vegetable broth",
            "pasta",
            "garlic",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil in a large pot and sauté garlic, onions, carrots, and celery 5 minutes.",
            "Add zucchini, tomato paste, beans, and vegetable broth. Simmer 20 minutes.",
            "Add pasta and cook until tender.",
            "Season with salt and pepper and serve hot."
        ]
    },
    {
        id: "70",
        name: "Greek Chicken Gyros",
        ingredients: [
            "chicken breast",
            "pita bread",
            "tomatoes",
            "onion",
            "cucumber",
            "tzatziki sauce",
            "olive oil",
            "salt",
            "pepper",
            "oregano"
        ],
        instructions: [
            "Season chicken with salt, pepper, and oregano, cook in olive oil until done, slice thinly.",
            "Chop tomatoes, onion, and cucumber.",
            "Warm pita bread and spread tzatziki sauce.",
            "Fill with chicken and vegetables, roll, and serve."
        ]
    },
    {
        id: "71",
        name: "Shrimp Pad Thai",
        ingredients: [
            "rice noodles",
            "shrimp",
            "eggs",
            "bean sprouts",
            "green onions",
            "peanuts",
            "pad thai sauce",
            "vegetable oil",
            "garlic",
            "lime"
        ],
        instructions: [
            "Cook rice noodles according to package instructions.",
            "Heat oil in a wok, sauté garlic, then add shrimp and cook until pink.",
            "Push shrimp aside, scramble eggs in the wok.",
            "Add noodles, bean sprouts, and pad thai sauce, tossing to combine.",
            "Garnish with peanuts, green onions, and lime wedges."
        ]
    },
    {
        id: "72",
        name: "Baked Cod with Lemon",
        ingredients: [
            "cod fillets",
            "lemon",
            "butter",
            "garlic",
            "parsley",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place cod fillets on a baking sheet, season with salt and pepper.",
            "Top with butter, minced garlic, and lemon slices.",
            "Bake 12-15 minutes until fish is opaque and flakes easily.",
            "Garnish with parsley and serve."
        ]
    },
    {
        id: "73",
        name: "Vegetable Frittata",
        ingredients: [
            "eggs",
            "milk",
            "spinach",
            "bell peppers",
            "onion",
            "cheese",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Beat eggs with milk, salt, and pepper.",
            "Sauté vegetables in olive oil until tender.",
            "Pour egg mixture over vegetables, sprinkle cheese on top.",
            "Bake 20-25 minutes until set and golden.",
            "Serve warm."
        ]
    },
    {
        id: "74",
        name: "Pork Chops with Apples",
        ingredients: [
            "pork chops",
            "apples",
            "onion",
            "butter",
            "olive oil",
            "salt",
            "pepper",
            "thyme"
        ],
        instructions: [
            "Season pork chops with salt and pepper.",
            "Heat olive oil and butter in a skillet, cook pork chops 4-5 minutes per side until golden.",
            "Remove pork and sauté sliced apples and onions with thyme until soft.",
            "Return pork to the pan and heat through.",
            "Serve warm."
        ]
    },
    {
        id: "75",
        name: "Chicken and Vegetable Stir Fry",
        ingredients: [
            "chicken breast",
            "broccoli",
            "carrots",
            "bell peppers",
            "soy sauce",
            "garlic",
            "ginger",
            "vegetable oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Slice chicken and vegetables into thin strips.",
            "Heat oil in a wok, cook chicken until golden.",
            "Add garlic and ginger, sauté 1 minute.",
            "Add vegetables and stir-fry 5-6 minutes until tender-crisp.",
            "Add soy sauce, toss well, and serve hot."
        ]
    },
    {
        id: "76",
        name: "Spinach Lasagna",
        ingredients: [
            "lasagna noodles",
            "spinach",
            "ricotta cheese",
            "mozzarella cheese",
            "tomato sauce",
            "olive oil",
            "garlic",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté garlic in olive oil, add spinach until wilted.",
            "Cook lasagna noodles and drain.",
            "Layer noodles, spinach, ricotta, tomato sauce, and mozzarella in a baking dish.",
            "Repeat layers, ending with mozzarella on top.",
            "Bake 35-40 minutes until cheese is golden. Serve hot."
        ]
    },
    {
        id: "77",
        name: "Mango Chicken Salad",
        ingredients: [
            "chicken breast",
            "mango",
            "lettuce",
            "red onion",
            "avocado",
            "olive oil",
            "lime juice",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook chicken and slice thinly.",
            "Chop mango, red onion, and avocado.",
            "Toss lettuce with olive oil, lime juice, salt, and pepper.",
            "Top with chicken and fruits. Serve chilled."
        ]
    },
    {
        id: "78",
        name: "Spicy Tuna Roll",
        ingredients: [
            "sushi rice",
            "nori sheets",
            "tuna",
            "sriracha",
            "mayonnaise",
            "cucumber",
            "soy sauce"
        ],
        instructions: [
            "Mix tuna with mayonnaise and sriracha.",
            "Place nori sheet on bamboo mat, spread sushi rice evenly.",
            "Place tuna mixture and cucumber slices, then roll tightly.",
            "Cut into pieces and serve with soy sauce."
        ]
    },
    {
        id: "79",
        name: "Baked Sweet Potatoes",
        ingredients: [
            "sweet potatoes",
            "olive oil",
            "salt",
            "pepper",
            "butter",
            "honey"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Scrub sweet potatoes, prick with fork.",
            "Rub with olive oil, salt, and pepper.",
            "Bake 45-50 minutes until tender.",
            "Split open, add butter and drizzle with honey."
        ]
    },
    {
        id: "80",
        name: "Chicken and Rice Casserole",
        ingredients: [
            "chicken breast",
            "rice",
            "cream of mushroom soup",
            "cheddar cheese",
            "onion",
            "garlic",
            "vegetable broth",
            "salt",
            "pepper",
            "olive oil"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté onion and garlic in olive oil until soft.",
            "Add diced chicken and cook until lightly browned.",
            "In a baking dish, mix chicken, rice, soup, broth, and seasonings.",
            "Top with cheddar cheese and bake 35-40 minutes until rice is cooked and cheese is melted.",
            "Serve hot."
        ]
    },
    {
        id: "81",
        name: "Beef Stroganoff",
        ingredients: [
            "beef strips",
            "mushrooms",
            "onion",
            "garlic",
            "sour cream",
            "beef broth",
            "flour",
            "butter",
            "olive oil",
            "salt",
            "pepper",
            "egg noodles"
        ],
        instructions: [
            "Cook egg noodles according to package instructions and set aside.",
            "Heat olive oil and butter in a skillet, sauté onions and garlic until soft.",
            "Add beef strips, cook until browned, remove and set aside.",
            "Add mushrooms and cook 5 minutes.",
            "Sprinkle flour, stir, then add beef broth, simmer 5 minutes until thickened.",
            "Return beef to skillet, stir in sour cream, season with salt and pepper.",
            "Serve hot over noodles."
        ]
    },
    {
        id: "82",
        name: "Garlic Butter Shrimp Pasta",
        ingredients: [
            "shrimp",
            "spaghetti",
            "garlic",
            "butter",
            "olive oil",
            "parsley",
            "salt",
            "pepper",
            "lemon"
        ],
        instructions: [
            "Cook spaghetti according to package instructions and drain.",
            "Heat olive oil and butter in a pan, sauté garlic 1 minute.",
            "Add shrimp and cook until pink.",
            "Toss in cooked pasta, season with salt and pepper.",
            "Garnish with parsley and lemon juice before serving."
        ]
    },
    {
        id: "83",
        name: "Buffalo Chicken Wings",
        ingredients: [
            "chicken wings",
            "hot sauce",
            "butter",
            "garlic powder",
            "salt",
            "pepper",
            "oil for frying"
        ],
        instructions: [
            "Season chicken wings with salt, pepper, and garlic powder.",
            "Heat oil in a deep fryer or pan, fry wings until crispy and golden.",
            "Melt butter and mix with hot sauce to make buffalo sauce.",
            "Toss fried wings in buffalo sauce and serve with celery sticks."
        ]
    },
    {
        id: "84",
        name: "Quinoa Salad",
        ingredients: [
            "quinoa",
            "cucumber",
            "tomatoes",
            "red onion",
            "feta cheese",
            "olive oil",
            "lemon juice",
            "salt",
            "pepper",
            "parsley"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let cool.",
            "Chop cucumber, tomatoes, and red onion.",
            "Mix quinoa with vegetables, feta, olive oil, and lemon juice.",
            "Season with salt and pepper, garnish with parsley, and serve."
        ]
    },
    {
        id: "85",
        name: "Pesto Pasta",
        ingredients: [
            "pasta",
            "basil pesto",
            "parmesan cheese",
            "olive oil",
            "salt",
            "pepper",
            "pine nuts (optional)"
        ],
        instructions: [
            "Cook pasta according to package instructions and drain.",
            "Toss pasta with basil pesto and a drizzle of olive oil.",
            "Season with salt and pepper.",
            "Top with parmesan cheese and pine nuts if desired."
        ]
    },
    {
        id: "86",
        name: "Teriyaki Chicken Bowl",
        ingredients: [
            "chicken breast",
            "rice",
            "broccoli",
            "carrots",
            "teriyaki sauce",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook rice according to package instructions.",
            "Season chicken with salt and pepper, cook in olive oil until golden and cooked through.",
            "Steam broccoli and carrots until tender.",
            "Slice chicken and serve over rice with vegetables.",
            "Drizzle teriyaki sauce on top before serving."
        ]
    },
    {
        id: "87",
        name: "Mushroom Risotto with Peas",
        ingredients: [
            "arborio rice",
            "mushrooms",
            "peas",
            "onion",
            "garlic",
            "vegetable broth",
            "parmesan cheese",
            "butter",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil in a pan, sauté onions and garlic until soft.",
            "Add mushrooms and cook until tender.",
            "Add rice and toast 2 minutes.",
            "Gradually add vegetable broth, stirring constantly until rice is creamy and cooked.",
            "Stir in peas, butter, and parmesan cheese, season with salt and pepper."
        ]
    },
    {
        id: "88",
        name: "Chicken Fajitas",
        ingredients: [
            "chicken breast",
            "bell peppers",
            "onion",
            "tortillas",
            "olive oil",
            "chili powder",
            "cumin",
            "salt",
            "pepper",
            "lime"
        ],
        instructions: [
            "Slice chicken and vegetables into thin strips.",
            "Season chicken with chili powder, cumin, salt, and pepper.",
            "Heat olive oil in a skillet, cook chicken until browned.",
            "Add vegetables and sauté until tender-crisp.",
            "Serve with warm tortillas and a squeeze of lime."
        ]
    },
    {
        id: "89",
        name: "Caprese Pasta Salad",
        ingredients: [
            "pasta",
            "cherry tomatoes",
            "mozzarella balls",
            "basil",
            "olive oil",
            "balsamic glaze",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook pasta according to package instructions and drain.",
            "Halve cherry tomatoes and combine with mozzarella balls and fresh basil.",
            "Toss pasta with olive oil, add tomato mixture, season with salt and pepper.",
            "Drizzle balsamic glaze on top before serving."
        ]
    },
    {
        id: "90",
        name: "Lemon Garlic Tilapia",
        ingredients: [
            "tilapia fillets",
            "lemon",
            "garlic",
            "butter",
            "olive oil",
            "parsley",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place tilapia on a baking sheet, season with salt and pepper.",
            "Top with minced garlic, butter, and lemon slices.",
            "Bake 10-12 minutes until fish flakes easily.",
            "Garnish with parsley and serve hot."
        ]
    },
    {
        id: "91",
        name: "Chicken Alfredo",
        ingredients: [
            "fettuccine pasta",
            "chicken breast",
            "heavy cream",
            "parmesan cheese",
            "garlic",
            "butter",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook fettuccine according to package instructions.",
            "Season chicken with salt and pepper, cook in olive oil until golden and cooked through.",
            "In a pan, melt butter, sauté garlic, add heavy cream and simmer 5 minutes.",
            "Add parmesan cheese and stir until sauce thickens.",
            "Toss pasta and chicken with sauce and serve hot."
        ]
    },
    {
        id: "92",
        name: "Greek Salad with Chicken",
        ingredients: [
            "chicken breast",
            "lettuce",
            "cucumber",
            "tomatoes",
            "feta cheese",
            "olives",
            "olive oil",
            "lemon juice",
            "oregano",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook chicken, season with salt and pepper, slice thinly.",
            "Chop lettuce, cucumber, and tomatoes.",
            "Combine vegetables with feta, olives, olive oil, lemon juice, and oregano.",
            "Top salad with chicken slices and serve."
        ]
    },
    {
        id: "93",
        name: "Baked Ziti",
        ingredients: [
            "ziti pasta",
            "ground beef",
            "tomato sauce",
            "ricotta cheese",
            "mozzarella cheese",
            "onion",
            "garlic",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cook ziti according to package instructions.",
            "Heat olive oil, sauté onion and garlic, add ground beef until browned.",
            "Stir in tomato sauce, season with salt and pepper.",
            "In a baking dish, layer pasta, ricotta, meat sauce, and mozzarella.",
            "Bake 25-30 minutes until cheese is melted and golden."
        ]
    },
    {
        id: "94",
        name: "Vegetable Curry",
        ingredients: [
            "potatoes",
            "carrots",
            "peas",
            "onion",
            "garlic",
            "curry powder",
            "coconut milk",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Heat olive oil, sauté onion and garlic until soft.",
            "Add diced potatoes and carrots, cook 5 minutes.",
            "Add curry powder, peas, and coconut milk, simmer 15 minutes until vegetables are tender.",
            "Season with salt and pepper and serve hot."
        ]
    },
    {
        id: "95",
        name: "BBQ Pulled Chicken Sandwich",
        ingredients: [
            "chicken breast",
            "bbq sauce",
            "bread rolls",
            "coleslaw",
            "onion",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook chicken in bbq sauce until tender.",
            "Shred chicken with forks.",
            "Toast bread rolls lightly.",
            "Fill rolls with pulled chicken, top with coleslaw and sliced onion.",
            "Serve warm."
        ]
    },
    {
        id: "96",
        name: "Eggplant Parmesan Pasta",
        ingredients: [
            "pasta",
            "eggplant",
            "tomato sauce",
            "parmesan cheese",
            "mozzarella cheese",
            "flour",
            "egg",
            "breadcrumbs",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Slice eggplant, season, dredge in flour, egg, and breadcrumbs, then fry until golden.",
            "Cook pasta according to package instructions.",
            "Toss pasta with tomato sauce, top with fried eggplant, parmesan, and mozzarella.",
            "Bake 15 minutes until cheese melts and serve hot."
        ]
    },
    {
        id: "97",
        name: "Thai Red Curry with Chicken",
        ingredients: [
            "chicken breast",
            "red curry paste",
            "coconut milk",
            "bell peppers",
            "onion",
            "basil",
            "rice",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Cook rice according to package instructions.",
            "Heat olive oil, sauté chicken until browned.",
            "Add red curry paste, cook 1 minute, then stir in coconut milk.",
            "Add bell peppers and onions, simmer 10 minutes.",
            "Garnish with basil and serve over rice."
        ]
    },
    {
        id: "98",
        name: "Baked Mac and Cheese",
        ingredients: [
            "macaroni",
            "cheddar cheese",
            "mozzarella cheese",
            "milk",
            "butter",
            "flour",
            "breadcrumbs",
            "salt",
            "pepper"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cook macaroni according to package instructions.",
            "Make a roux: melt butter, whisk in flour, cook 1 minute, add milk slowly until thickened.",
            "Stir in cheese until melted, mix with cooked macaroni.",
            "Place in baking dish, top with breadcrumbs and extra cheese.",
            "Bake 20 minutes until golden and bubbly."
        ]
    },
    {
        id: "99",
        name: "Chicken Teriyaki Skewers",
        ingredients: [
            "chicken breast",
            "soy sauce",
            "honey",
            "garlic",
            "ginger",
            "bell peppers",
            "onion",
            "olive oil",
            "salt",
            "pepper"
        ],
        instructions: [
            "Mix soy sauce, honey, garlic, and ginger to make teriyaki sauce.",
            "Cut chicken and vegetables into cubes, thread onto skewers.",
            "Brush skewers with sauce and marinate 30 minutes.",
            "Grill or bake until chicken is cooked through, 10-12 minutes.",
            "Serve with remaining sauce."
        ]
    },
    {
        id: "100",
        name: "Vegetable Fried Rice",
        ingredients: [
            "cooked rice",
            "carrots",
            "peas",
            "bell peppers",
            "onion",
            "soy sauce",
            "garlic",
            "eggs",
            "olive oil",
            "salt",
            "pepper",
            "green onions"
        ],
        instructions: [
            "Heat olive oil in a wok, sauté garlic and onion until fragrant.",
            "Add chopped vegetables and cook 3-4 minutes.",
            "Push vegetables aside, scramble eggs in the wok.",
            "Add cooked rice and soy sauce, toss well.",
            "Season with salt and pepper, garnish with green onions, and serve hot."
        ]
    },
    {
        id: "101",
        name: "Dim Bhaji (Detailed)",
        ingredients: [
            "eggs",
            "onion",
            "green chili",
            "oil",
            "salt",
            "turmeric"
        ],
        instructions: [
            "Crack eggs into a bowl, add salt and a pinch of turmeric, then beat well until smooth.",
            "Heat oil in a frying pan over medium heat.",
            "Add chopped onions and green chilies, sauté for 2-3 minutes until soft and slightly golden.",
            "Pour the beaten eggs into the pan.",
            "Stir continuously using a spatula to scramble the eggs evenly.",
            "Cook until eggs are fully set but still soft.",
            "Serve hot with rice or bread."
        ]
    },
    {
        id: "102",
        name: "Alu Bhorta (Traditional Style)",
        ingredients: [
            "boiled potatoes",
            "onion",
            "green chili",
            "mustard oil",
            "salt",
            "coriander leaves"
        ],
        instructions: [
            "Boil potatoes until soft, then peel the skin.",
            "Mash the potatoes in a bowl until smooth.",
            "Add finely chopped onion, green chili, and coriander leaves.",
            "Add salt to taste.",
            "Pour 1-2 teaspoons of mustard oil for authentic flavor.",
            "Mix everything thoroughly using your hand for best texture.",
            "Serve with hot rice and lentils."
        ]
    },
    {
        id: "103",
        name: "Simple Masoor Dal",
        ingredients: [
            "red lentils",
            "water",
            "onion",
            "garlic",
            "turmeric",
            "salt",
            "oil"
        ],
        instructions: [
            "Wash lentils thoroughly until water runs clear.",
            "Boil lentils with turmeric and salt for 10-12 minutes until soft.",
            "In a separate pan, heat oil and sauté chopped onion and garlic until golden brown.",
            "Pour the fried mixture (tadka) into the boiled dal.",
            "Mix well and simmer for 2-3 minutes.",
            "Serve hot with rice."
        ]
    },
    {
        id: "104",
        name: "Begun Bhaja (Crispy)",
        ingredients: [
            "eggplant",
            "salt",
            "turmeric",
            "chili powder",
            "oil"
        ],
        instructions: [
            "Slice eggplant into medium-thick round pieces.",
            "Rub salt, turmeric, and chili powder on both sides.",
            "Heat oil in a pan on medium heat.",
            "Fry eggplant slices until golden brown on both sides.",
            "Ensure edges become slightly crispy.",
            "Remove and place on tissue to absorb excess oil.",
            "Serve with rice and dal."
        ]
    },
    {
        id: "105",
        name: "Dim Curry (Bachelor Version)",
        ingredients: [
            "eggs",
            "onion",
            "tomato",
            "garlic",
            "turmeric",
            "chili powder",
            "oil",
            "salt"
        ],
        instructions: [
            "Boil eggs for 10 minutes, peel and lightly fry them in oil.",
            "In the same pan, sauté chopped onions and garlic until golden.",
            "Add chopped tomatoes and cook until soft.",
            "Add turmeric, chili powder, and salt, mix well.",
            "Add water to make gravy.",
            "Add fried eggs and simmer for 8-10 minutes.",
            "Serve with rice."
        ]
    },
    {
        id: "106",
        name: "Chicken Bhuna Easy",
        ingredients: [
            "chicken",
            "onion",
            "ginger garlic paste",
            "turmeric",
            "chili powder",
            "oil",
            "salt"
        ],
        instructions: [
            "Heat oil and fry sliced onions until golden brown.",
            "Add ginger-garlic paste and cook for 1 minute.",
            "Add chicken pieces and cook until slightly browned.",
            "Add turmeric, chili powder, and salt.",
            "Cook on medium heat, stirring occasionally.",
            "Add a little water and cook until chicken is tender and oil separates.",
            "Serve hot with rice."
        ]
    },
    {
        id: "107",
        name: "Khichuri (Simple)",
        ingredients: [
            "rice",
            "lentils",
            "turmeric",
            "salt",
            "oil"
        ],
        instructions: [
            "Wash rice and lentils together.",
            "Boil with turmeric and salt.",
            "Stir occasionally to avoid sticking.",
            "Cook until soft and slightly mushy.",
            "Drizzle a little oil on top.",
            "Serve hot with egg fry or pickle."
        ]
    },
    {
        id: "108",
        name: "Alu Dim Curry",
        ingredients: [
            "potato",
            "egg",
            "onion",
            "garlic",
            "spices",
            "oil",
            "salt"
        ],
        instructions: [
            "Boil eggs and fry lightly.",
            "Cut potatoes into cubes and fry slightly.",
            "Cook onion and garlic until golden.",
            "Add spices and mix well.",
            "Add potatoes and water, cook until soft.",
            "Add eggs and simmer for 5-7 minutes.",
            "Serve hot."
        ]
    },
    {
        id: "109",
        name: "Chaler Ruti",
        ingredients: [
            "rice flour",
            "water",
            "salt"
        ],
        instructions: [
            "Boil water with salt.",
            "Add rice flour and mix into dough.",
            "Knead while warm until smooth.",
            "Make small balls and flatten into thin discs.",
            "Cook on a hot pan without oil.",
            "Serve with curry or bhorta."
        ]
    },
    {
        id: "110",
        name: "Chicken Fried Rice (BD Style)",
        ingredients: [
            "rice",
            "chicken",
            "egg",
            "soy sauce",
            "carrot",
            "oil",
            "salt"
        ],
        instructions: [
            "Cook rice and let it cool completely.",
            "Heat oil and cook chicken pieces until done.",
            "Add egg and scramble.",
            "Add chopped vegetables and sauté.",
            "Add rice and soy sauce.",
            "Mix well and fry for 5 minutes.",
            "Serve hot."
        ]
    },
    // 🔥 Continue up to 130
    {
        id: "111",
        name: "Dal Khichuri with Egg Fry",
        ingredients: [
            "rice",
            "lentils",
            "egg",
            "turmeric",
            "salt",
            "oil"
        ],
        instructions: [
            "Cook rice and lentils together with turmeric and salt.",
            "In a separate pan, fry egg with a pinch of salt.",
            "Serve khichuri hot with egg fry on top."
        ]
    },
    {
        id: "112",
        name: "Simple Fish Curry",
        ingredients: [
            "fish",
            "onion",
            "turmeric",
            "chili powder",
            "oil",
            "salt"
        ],
        instructions: [
            "Marinate fish with salt and turmeric.",
            "Fry fish lightly and set aside.",
            "Cook onion and spices.",
            "Add water to make gravy.",
            "Add fish and simmer 10 minutes."
        ]
    },
    {
        id: "113",
        name: "Panta Bhat",
        ingredients: [
            "rice",
            "water",
            "salt"
        ],
        instructions: [
            "Soak cooked rice in water overnight.",
            "Add salt before eating.",
            "Serve with chili or fried items."
        ]
    },
    {
        id: "114",
        name: "Dim Toast Improved",
        ingredients: [
            "bread",
            "egg",
            "milk",
            "salt",
            "oil"
        ],
        instructions: [
            "Beat egg with a little milk and salt.",
            "Dip bread into mixture.",
            "Fry on both sides until golden.",
            "Serve hot."
        ]
    },
    {
        id: "115",
        name: "Chicken Soup Simple",
        ingredients: [
            "chicken",
            "water",
            "garlic",
            "salt",
            "pepper"
        ],
        instructions: [
            "Boil chicken with garlic and salt.",
            "Simmer 20 minutes.",
            "Add pepper before serving.",
            "Serve warm."
        ]
    },
    {
        id: "116",
        name: "Alu Bhaji Crispy",
        ingredients: [
            "potato",
            "oil",
            "salt",
            "turmeric"
        ],
        instructions: [
            "Slice potatoes thinly.",
            "Fry in hot oil until crispy.",
            "Add salt and turmeric.",
            "Serve immediately."
        ]
    },
    {
        id: "117",
        name: "Chana Masala Easy",
        ingredients: [
            "chickpeas",
            "onion",
            "tomato",
            "spices",
            "oil"
        ],
        instructions: [
            "Boil chickpeas until soft.",
            "Cook onion and tomato with spices.",
            "Add chickpeas and cook 10 minutes.",
            "Serve hot."
        ]
    },
    {
        id: "118",
        name: "Egg Sandwich BD Style",
        ingredients: [
            "bread",
            "egg",
            "onion",
            "mayonnaise",
            "salt"
        ],
        instructions: [
            "Boil eggs and mash.",
            "Mix with onion and mayonnaise.",
            "Spread on bread.",
            "Serve."
        ]
    },
    {
        id: "119",
        name: "Simple Chicken Khichuri",
        ingredients: [
            "rice",
            "lentils",
            "chicken",
            "turmeric",
            "salt"
        ],
        instructions: [
            "Cook chicken with spices.",
            "Add rice and lentils.",
            "Cook together until soft.",
            "Serve hot."
        ]
    },
    {
        id: "120",
        name: "Milk Tea Perfect",
        ingredients: [
            "tea",
            "milk",
            "sugar",
            "water"
        ],
        instructions: [
            "Boil water with tea leaves.",
            "Add milk and sugar.",
            "Boil 2-3 minutes.",
            "Strain and serve."
        ]
    },
    {
        id: "121",
        name: "Vegetable Bhaji Mix",
        ingredients: [
            "mixed vegetables",
            "oil",
            "salt",
            "turmeric"
        ],
        instructions: [
            "Cut vegetables evenly.",
            "Heat oil and add vegetables.",
            "Cook with salt and turmeric.",
            "Stir until soft."
        ]
    },
    {
        id: "122",
        name: "Rice with Fried Fish",
        ingredients: [
            "rice",
            "fish",
            "oil",
            "salt",
            "turmeric"
        ],
        instructions: [
            "Cook rice.",
            "Marinate fish and fry.",
            "Serve together."
        ]
    },
    {
        id: "123",
        name: "Dim Bhurji Spicy",
        ingredients: [
            "egg",
            "onion",
            "chili",
            "oil",
            "salt"
        ],
        instructions: [
            "Fry onion and chili.",
            "Add egg and scramble.",
            "Cook until dry."
        ]
    },
    {
        id: "124",
        name: "Chicken Roll",
        ingredients: [
            "paratha",
            "chicken",
            "onion",
            "sauce"
        ],
        instructions: [
            "Cook chicken pieces.",
            "Place inside paratha with onion.",
            "Add sauce and roll."
        ]
    },
    {
        id: "125",
        name: "Simple Vegetable Soup BD",
        ingredients: [
            "vegetables",
            "water",
            "salt"
        ],
        instructions: [
            "Boil vegetables.",
            "Add salt.",
            "Serve warm."
        ]
    },
    {
        id: "126",
        name: "Banana Shake",
        ingredients: [
            "banana",
            "milk",
            "sugar"
        ],
        instructions: [
            "Blend all ingredients.",
            "Serve chilled."
        ]
    },
    {
        id: "127",
        name: "Bread Omelette",
        ingredients: [
            "bread",
            "egg",
            "salt",
            "oil"
        ],
        instructions: [
            "Cook omelette.",
            "Place between bread.",
            "Serve."
        ]
    },
    {
        id: "128",
        name: "Chicken Fry Quick",
        ingredients: [
            "chicken",
            "salt",
            "pepper",
            "oil"
        ],
        instructions: [
            "Season chicken.",
            "Fry until golden and cooked.",
            "Serve hot."
        ]
    },
    {
        id: "129",
        name: "Tomato Bhorta",
        ingredients: [
            "tomato",
            "onion",
            "chili",
            "oil",
            "salt"
        ],
        instructions: [
            "Roast tomatoes.",
            "Mash with onion and chili.",
            "Add oil and salt."
        ]
    },
    {
        id: "130",
        name: "Simple Dal Soup",
        ingredients: [
            "lentils",
            "water",
            "salt"
        ],
        instructions: [
            "Boil lentils.",
            "Add salt.",
            "Serve warm."
        ]
    }
];
const allIngredients = [
    // 🔹 Protein
    "chicken",
    "chicken breast",
    "chicken thighs",
    "ground beef",
    "beef",
    "pork",
    "fish",
    "tilapia fillets",
    "salmon",
    "shrimp",
    "eggs",
    "duck egg",
    "chickpeas",
    "lentils",
    "red lentils",
    "kidney beans",
    "black beans",
    // 🔹 Grains & Carbs
    "rice",
    "basmati rice",
    "brown rice",
    "pasta",
    "spaghetti",
    "macaroni",
    "noodles",
    "rice noodles",
    "egg noodles",
    "bread",
    "pita bread",
    "pizza dough",
    "tortillas",
    "flour",
    "rice flour",
    "semolina (suji)",
    "oats",
    // 🔹 Dairy
    "milk",
    "butter",
    "ghee",
    "cream",
    "heavy cream",
    "yogurt",
    "cheese",
    "cheddar cheese",
    "mozzarella",
    "parmesan",
    "ricotta cheese",
    "feta",
    // 🔹 Vegetables (Core)
    "onion",
    "red onion",
    "green onions",
    "garlic",
    "ginger",
    "potatoes",
    "sweet potatoes",
    "tomatoes",
    "carrots",
    "cucumber",
    "eggplant",
    "zucchini",
    "bell peppers",
    "cabbage",
    "spinach",
    "broccoli",
    "green beans",
    "peas",
    "green peas",
    "pumpkin",
    "bottle gourd",
    "bitter gourd",
    "drumstick vegetable",
    // 🔹 Fruits
    "banana",
    "apple",
    "mango",
    "lemon",
    "lime",
    "orange",
    "pineapple",
    "strawberries",
    "blueberries",
    "avocado",
    "dates",
    "coconut",
    // 🔹 Oils & Fats
    "oil",
    "vegetable oil",
    "olive oil",
    "mustard oil",
    "butter",
    "ghee",
    // 🔹 Spices (Basic)
    "salt",
    "black pepper",
    "turmeric",
    "chili powder",
    "red chili flakes",
    "cumin",
    "coriander powder",
    "garam masala",
    "curry powder",
    "paprika",
    "oregano",
    "thyme",
    "cinnamon",
    "cardamom",
    "cloves",
    "bay leaf",
    // 🔹 Sauces & Condiments
    "soy sauce",
    "tomato sauce",
    "ketchup",
    "bbq sauce",
    "hot sauce",
    "sriracha",
    "mayonnaise",
    "mustard sauce",
    "vinegar",
    "balsamic vinegar",
    "balsamic glaze",
    "caesar dressing",
    "tzatziki sauce",
    "pad thai sauce",
    "teriyaki sauce",
    // 🔹 Sweeteners
    "sugar",
    "brown sugar",
    "honey",
    "maple syrup",
    // 🔹 Herbs & Extras
    "parsley",
    "cilantro",
    "basil",
    "mint",
    "coriander leaves",
    "green chili",
    "dry chili",
    // 🔹 Nuts & Seeds
    "peanuts",
    "almonds",
    "cashews",
    "pine nuts",
    "sesame seeds",
    // 🔹 Baking Essentials
    "baking powder",
    "baking soda",
    "vanilla extract",
    "cocoa powder",
    "chocolate chips",
    // 🔹 Liquid Base
    "water",
    "vegetable broth",
    "chicken broth",
    "beef broth",
    "coconut milk",
    // 🔹 Ready / Processed
    "coleslaw",
    "croutons",
    "anchovy fillets",
    "capers",
    "olives",
    "bean sprouts"
];
}),
"[project]/components/ingredient-input.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IngredientInput",
    ()=>IngredientInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-ssr] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-ssr] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/recipes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const IngredientInput = ({ user, onLogout, onViewSaved, onFindRecipes })=>{
    const [ingredients, setIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIngredient, setCurrentIngredient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchMode, setSearchMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ingredient");
    const [recipeQuery, setRecipeQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [recipeSuggestions, setRecipeSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // load saved ingredients
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem("recipeGenieIngredients");
        if (stored) setIngredients(JSON.parse(stored));
    }, []);
    // add ingredient
    const addIngredient = (e)=>{
        e.preventDefault();
        const value = currentIngredient.trim().toLowerCase();
        if (value && !ingredients.includes(value)) {
            const updated = [
                ...ingredients,
                value
            ];
            setIngredients(updated);
            localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated));
        }
        setCurrentIngredient("");
        setSuggestions([]);
    };
    // remove ingredient
    const removeIngredient = (item)=>{
        console.log("cross");
        const updated = ingredients.filter((i)=>i !== item);
        setIngredients(updated);
        localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated));
    };
    // ingredient suggestion
    const handleIngredientChange = (e)=>{
        const value = e.target.value.toLowerCase();
        setCurrentIngredient(value);
        if (value.trim()) {
            const matches = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allIngredients"].filter((item)=>item.toLowerCase().includes(value) && !ingredients.includes(item.toLowerCase()));
            setSuggestions(matches.slice(0, 5));
        } else {
            setSuggestions([]);
        }
    };
    const selectIngredient = (item)=>{
        if (!ingredients.includes(item)) {
            const updated = [
                ...ingredients,
                item
            ];
            setIngredients(updated);
            localStorage.setItem("recipeGenieIngredients", JSON.stringify(updated));
        }
        setCurrentIngredient("");
        setSuggestions([]);
    };
    // 🔍 recipe suggestion
    const handleRecipeChange = (e)=>{
        const value = e.target.value.toLowerCase();
        setRecipeQuery(value);
        if (value.trim()) {
            const matches = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].filter((r)=>r.name.toLowerCase().includes(value)).map((r)=>r.name);
            setRecipeSuggestions(matches.slice(0, 5));
        } else {
            setRecipeSuggestions([]);
        }
    };
    const selectRecipe = (name)=>{
        setRecipeQuery(name);
        setRecipeSuggestions([]);
        onFindRecipes(name);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {}, void 0, false, {
                                    fileName: "[project]/components/ingredient-input.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold",
                                    children: "Recipe Genie"
                                }, void 0, false, {
                                    fileName: "[project]/components/ingredient-input.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ingredient-input.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onViewSaved,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ingredient-input.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Saved"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ingredient-input.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onLogout,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ingredient-input.jsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ingredient-input.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ingredient-input.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ingredient-input.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ingredient-input.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8 max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: searchMode === "ingredient" ? "default" : "outline",
                                onClick: ()=>setSearchMode("ingredient"),
                                children: "Ingredient"
                            }, void 0, false, {
                                fileName: "[project]/components/ingredient-input.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: searchMode === "recipe" ? "default" : "outline",
                                onClick: ()=>setSearchMode("recipe"),
                                children: "Recipe"
                            }, void 0, false, {
                                fileName: "[project]/components/ingredient-input.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ingredient-input.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: searchMode === "ingredient" ? "Add Ingredients" : "Search Recipe"
                                }, void 0, false, {
                                    fileName: "[project]/components/ingredient-input.jsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ingredient-input.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    searchMode === "ingredient" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: addIngredient,
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: currentIngredient,
                                                        onChange: handleIngredientChange,
                                                        placeholder: "Add ingredient..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "absolute bg-white border w-full mt-1 z-50",
                                                        children: suggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                onClick: ()=>selectIngredient(s),
                                                                className: "p-2 hover:bg-gray-100 cursor-pointer",
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/components/ingredient-input.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "submit",
                                                        className: "mt-2 w-full",
                                                        children: "Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ingredient-input.jsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-4",
                                                children: ingredients.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "  px-2 rounded-md py-2 bg-amber-800 text-white",
                                                        children: [
                                                            item,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                onClick: ()=>removeIngredient(item),
                                                                className: "ml-2 border-2 border-red-800 rounded-full px-2 cursor-pointer",
                                                                children: "X"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ingredient-input.jsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ingredient-input.jsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ingredients.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "mt-4 w-full",
                                                onClick: ()=>onFindRecipes(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Find Recipes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ingredient-input.jsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    searchMode === "recipe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: recipeQuery,
                                                        onChange: handleRecipeChange,
                                                        placeholder: "Search recipe...",
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter") {
                                                                onFindRecipes(recipeQuery);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>onFindRecipes(recipeQuery),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                                                            fileName: "[project]/components/ingredient-input.jsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ingredient-input.jsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            recipeSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "absolute top-12 left-0 right-0 bg-white border rounded shadow z-50",
                                                children: recipeSuggestions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        onClick: ()=>selectRecipe(item),
                                                        className: "p-2 hover:bg-gray-100 cursor-pointer",
                                                        children: item
                                                    }, item, false, {
                                                        fileName: "[project]/components/ingredient-input.jsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ingredient-input.jsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ingredient-input.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ingredient-input.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ingredient-input.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ingredient-input.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ingredient-input.jsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/recipe-match.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeMatch",
    ()=>RecipeMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-ssr] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-ssr] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/recipes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const RecipeMatch = ({ query, ingredients: propIngredients, onBack, onViewSaved })=>{
    console.log(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"]);
    const [ingredients, setIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedRecipes, setMatchedRecipes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedRecipes, setSavedRecipes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let results = [];
        // 🔍 Name search
        if (typeof query === "string" && query.trim()) {
            results = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].filter((recipe)=>recipe.name.toLowerCase().includes(query.toLowerCase()));
            console.log(results);
            setMatchedRecipes(results);
            setIngredients([]);
        } else if (propIngredients && propIngredients.length > 0) {
            setIngredients(propIngredients);
            results = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].filter((recipe)=>{
                const matchCount = recipe.ingredients.filter((ing)=>propIngredients.some((userIng)=>ing.toLowerCase().includes(userIng.toLowerCase()))).length;
                return matchCount >= 2;
            });
            setMatchedRecipes(results);
        }
        // 💾 Load saved
        const saved = localStorage.getItem("recipeGenieSaved");
        if (saved) {
            setSavedRecipes(JSON.parse(saved));
        }
    }, [
        query,
        propIngredients
    ]);
    const toggleSave = (recipeId)=>{
        let updated;
        if (savedRecipes.includes(recipeId)) {
            updated = savedRecipes.filter((id)=>id !== recipeId);
        } else {
            updated = [
                ...savedRecipes,
                recipeId
            ];
        }
        setSavedRecipes(updated);
        localStorage.setItem("recipeGenieSaved", JSON.stringify(updated));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full bg-primary p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                                        className: "w-6 h-6 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold",
                                    children: "Recipe Genie"
                                }, void 0, false, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/recipe-match.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onViewSaved,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/recipe-match.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Saved (",
                                        savedRecipes.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: onBack,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/recipe-match.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/recipe-match.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/recipe-match.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold",
                                children: query ? `Results for "${query}"` : "Recipe Matches"
                            }, void 0, false, {
                                fileName: "[project]/components/recipe-match.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: [
                                    "Found ",
                                    matchedRecipes.length,
                                    " recipe(s)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/recipe-match.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/recipe-match.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !query && ingredients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 bg-muted/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: "Your Ingredients"
                                }, void 0, false, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/recipe-match.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "flex flex-wrap gap-2",
                                children: ingredients.map((ing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        children: ing
                                    }, ing, false, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/recipe-match.jsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/recipe-match.jsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: matchedRecipes.map((recipe)=>{
                            const isSaved = savedRecipes.includes(recipe.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-2 hover:shadow-lg transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: recipe.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/recipe-match.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: [
                                                                recipe.ingredients.length,
                                                                " ingredients"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/recipe-match.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/recipe-match.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: isSaved ? "default" : "outline",
                                                    size: "icon",
                                                    onClick: ()=>toggleSave(recipe.id),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: isSaved ? "fill-current w-4 h-4" : "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/recipe-match.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/recipe-match.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/recipe-match.jsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium mb-2",
                                                        children: "Ingredients"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/recipe-match.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1.5",
                                                        children: recipe.ingredients.map((ing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "text-xs",
                                                                children: ing
                                                            }, i, false, {
                                                                fileName: "[project]/components/recipe-match.jsx",
                                                                lineNumber: 157,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/recipe-match.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/recipe-match.jsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium mb-2",
                                                        children: "Steps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/recipe-match.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "text-sm text-muted-foreground list-decimal list-inside space-y-1",
                                                        children: recipe.instructions.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: step
                                                            }, i, false, {
                                                                fileName: "[project]/components/recipe-match.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/recipe-match.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/recipe-match.jsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, recipe.id, true, {
                                fileName: "[project]/components/recipe-match.jsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/recipe-match.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    matchedRecipes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "py-10 text-center text-muted-foreground",
                            children: [
                                "No recipes found. Try another search.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onBack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/recipe-match.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Back"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/recipe-match.jsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/recipe-match.jsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/recipe-match.jsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/recipe-match.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/recipe-match.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/recipe-match.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/saved-recipes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SavedRecipes",
    ()=>SavedRecipes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-ssr] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/recipes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function SavedRecipes({ onBack }) {
    const [savedRecipeIds, setSavedRecipeIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedRecipesList, setSavedRecipesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load saved recipes
        const saved = localStorage.getItem("recipeGenieSaved");
        if (saved) {
            const ids = JSON.parse(saved);
            setSavedRecipeIds(ids);
            const savedRecipes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].filter((recipe)=>ids.includes(recipe.id));
            setSavedRecipesList(savedRecipes);
        }
    }, []);
    const removeSaved = (recipeId)=>{
        const updated = savedRecipeIds.filter((id)=>id !== recipeId);
        setSavedRecipeIds(updated);
        localStorage.setItem("recipeGenieSaved", JSON.stringify(updated));
        setSavedRecipesList(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].filter((recipe)=>updated.includes(recipe.id)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full bg-primary p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"], {
                                            className: "w-6 h-6 text-primary-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/saved-recipes.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/saved-recipes.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold",
                                        children: "Recipe Genie"
                                    }, void 0, false, {
                                        fileName: "[project]/components/saved-recipes.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/saved-recipes.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: onBack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/saved-recipes.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/saved-recipes.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/saved-recipes.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/saved-recipes.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/saved-recipes.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8 max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-balance",
                                    children: "Saved Recipes"
                                }, void 0, false, {
                                    fileName: "[project]/components/saved-recipes.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-balance",
                                    children: "Your favorite recipes collection"
                                }, void 0, false, {
                                    fileName: "[project]/components/saved-recipes.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/saved-recipes.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        savedRecipesList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "py-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-12 h-12 mx-auto mb-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/saved-recipes.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-balance mb-4",
                                        children: "You haven't saved any recipes yet. Start exploring recipes to build your collection!"
                                    }, void 0, false, {
                                        fileName: "[project]/components/saved-recipes.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onBack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/saved-recipes.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            "Back to Ingredients"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/saved-recipes.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/saved-recipes.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/saved-recipes.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: savedRecipesList.map((recipe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-2 hover:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                className: "text-xl",
                                                                children: recipe.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/saved-recipes.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                className: "mt-1",
                                                                children: [
                                                                    recipe.ingredients.length,
                                                                    " ingredients"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/saved-recipes.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/saved-recipes.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "default",
                                                        size: "icon",
                                                        onClick: ()=>removeSaved(recipe.id),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "w-4 h-4 fill-current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/saved-recipes.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/saved-recipes.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/saved-recipes.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/saved-recipes.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium mb-2",
                                                            children: "Ingredients:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/saved-recipes.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5",
                                                            children: recipe.ingredients.map((ing, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-xs",
                                                                    children: ing
                                                                }, idx, false, {
                                                                    fileName: "[project]/components/saved-recipes.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/saved-recipes.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/saved-recipes.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium mb-2",
                                                            children: "Instructions:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/saved-recipes.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            className: "text-sm text-muted-foreground space-y-1 list-decimal list-inside",
                                                            children: recipe.instructions.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "leading-relaxed",
                                                                    children: step
                                                                }, idx, false, {
                                                                    fileName: "[project]/components/saved-recipes.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/saved-recipes.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/saved-recipes.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/saved-recipes.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, recipe.id, true, {
                                    fileName: "[project]/components/saved-recipes.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/saved-recipes.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/saved-recipes.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/saved-recipes.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/saved-recipes.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/login.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ingredient$2d$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ingredient-input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$recipe$2d$match$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/recipe-match.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$saved$2d$recipes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/saved-recipes.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIngredients, setSelectedIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // console.log(currentView ,searchQuery , selectedIngredients )
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedUser = localStorage.getItem("recipeGenieUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setCurrentView("ingredients");
        }
    }, []);
    const handleLogin = (name, email)=>{
        const userData = {
            name,
            email
        };
        localStorage.setItem("recipeGenieUser", JSON.stringify(userData));
        setUser(userData);
        setCurrentView("ingredients");
    };
    const handleLogout = ()=>{
        localStorage.removeItem("recipeGenieUser");
        setUser(null);
        setCurrentView("login");
    };
    const handleFindRecipes = (query)=>{
        if (query) {
            setSearchQuery(query);
            setSelectedIngredients([]);
        } else {
            const stored = localStorage.getItem("recipeGenieIngredients");
            if (stored) {
                setSelectedIngredients(JSON.parse(stored));
            }
            setSearchQuery(null);
        }
        setCurrentView("recipes");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            currentView === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$login$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Login"], {
                onLogin: handleLogin
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 58,
                columnNumber: 35
            }, this),
            currentView === "ingredients" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ingredient$2d$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IngredientInput"], {
                user: user,
                onLogout: handleLogout,
                onViewSaved: ()=>setCurrentView("saved"),
                onFindRecipes: handleFindRecipes
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            currentView === "recipes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$recipe$2d$match$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecipeMatch"], {
                query: searchQuery,
                ingredients: selectedIngredients,
                onBack: ()=>setCurrentView("ingredients"),
                onViewSaved: ()=>setCurrentView("saved")
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            currentView === "saved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$saved$2d$recipes$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SavedRecipes"], {
                onBack: ()=>setCurrentView("ingredients")
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0ix1u3v._.js.map