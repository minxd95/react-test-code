import { setupWorker } from "msw";
import postHandlers from "./postHandlers";

export const worker = setupWorker(...postHandlers);
