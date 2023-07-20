import handleError from "./handleError.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import uniqueUsername from "./uniqueUsername.middleware";
import verifyUserIdParams from "./verifyUserIdParams.middleware";
import verifyProfileExists from "./verifyProfilerExists.middleware";
import verifyUserIdBody from "./verifyUserIdBody.middleware";
import verifyPostIdParams from "./verifyPostIdParams.middleware";

export default {
    handleError,
    uniqueEmail,
    uniqueUsername,
    verifyUserIdParams,
    verifyProfileExists,
    verifyUserIdBody,
    verifyPostIdParams
}