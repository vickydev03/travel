// // import { auth } from "@/utils/firebase";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "@/lib/firebase";
// export const sendOtp = async (phone: string) => {
//   const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//     size: "invisible",
//   });

//   const confirmation = await signInWithPhoneNumber(
//     auth,
//     `+91${phone}`,
//     verifier
//   );

//   return confirmation; // store this
// };
// function getFirebaseOtpError(code?: string) {
//   switch (code) {
//     case "auth/invalid-phone-number":
//       return "Invalid phone number";
//     case "auth/too-many-requests":
//       return "Too many attempts. Try again later";
//     case "auth/quota-exceeded":
//       return "OTP service temporarily unavailable";
//     case "auth/captcha-check-failed":
//       return "Captcha verification failed";
//     default:
//       return "Failed to send OTP. Please try again";
//   }
// }