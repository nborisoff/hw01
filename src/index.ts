import { SETTINGS } from "./app/settings";
import { app } from "./app/app";

app.listen(SETTINGS.PORT, () => {
  console.log(`App listening on port ${SETTINGS.PORT}`);
});
