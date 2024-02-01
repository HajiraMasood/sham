import {
  require_client
} from "/build/_shared/chunk-ZWGWGGVF.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-5NYOE52F.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZYY4VAXH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1706780502995.8706";
}
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ React.createElement(import_react2.StrictMode, null, /* @__PURE__ */ React.createElement(RemixBrowser, null))
  );
});
//# sourceMappingURL=/build/entry.client-NHUWQVOW.js.map
