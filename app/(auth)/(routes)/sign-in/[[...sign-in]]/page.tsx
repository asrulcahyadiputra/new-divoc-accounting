import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
          termsPageUrl: "https://clerk.com/terms",
        },
        elements: {
          formFieldInput:
            "focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 ring-1 ring-slate-200 shadow-sm",
          formButtonPrimary:
            "h-10 px-6 bg-green-500 font-semibold rounded-md hover:bg-green-600",
          socialButtonsBlockButton: "h-10 px-6 font-semibold rounded-md",
        },
      }}
    />
  );
}
