import bootstrapI18n from "./i18n";
import bootstrapAxios from "./axios";
import configureStore from "./store";

export default function bootstrapApp() {
  bootstrapI18n();
  bootstrapAxios();
  return configureStore();
}
