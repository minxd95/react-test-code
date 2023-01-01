import { setupServer } from "msw/node";
import postHandlers from "./postHandlers";

export const server = setupServer(...postHandlers);
