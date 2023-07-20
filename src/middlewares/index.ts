import handleError from "./handleError.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import uniqueUsername from "./uniqueUsername.middleware";
import verifyUserIdParams from "./verifyUserIdParams.middleware";
import verifyProfileExists from "./verifyProfilerExists.middleware";
export default {
    handleError,
    uniqueEmail,
    uniqueUsername,
    verifyUserIdParams,
    verifyProfileExists
}