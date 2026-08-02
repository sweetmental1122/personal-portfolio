/**
 * EmailJS delivers the contact form straight from the browser, so no server
 * route or mail provider key is involved.
 *
 * All three values are public by design — EmailJS ships them in the client
 * bundle whatever you do, and the public key is not a secret. What actually
 * stops someone reusing them is the allow-list: set your domain under
 * Account → Security → Allowed Origins in the EmailJS dashboard. Until you
 * do, anyone who reads the bundle can send mail through your quota.
 *
 * Env vars override the defaults, which is useful for a staging template.
 */
export const emailjs = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_9db8lan",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_j9rtb5q",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "BJToWudAZDe8j-tcf",
};

/**
 * The template variables this form sends. Your EmailJS template has to use
 * these exact names — `{{name}}`, `{{message}}` and so on — or the mail
 * arrives with blanks where the answers should be.
 *
 * `reply_to` duplicates `email` because EmailJS templates commonly bind the
 * reply-to header to one or the other; sending both means either works.
 */
export type ContactPayload = {
  name: string;
  email: string;
  reply_to: string;
  company: string;
  project_type: string;
  budget: string;
  deadline: string;
  message: string;
  locale: string;
};
