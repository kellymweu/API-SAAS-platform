import { Header } from "@/components/header";
import { mustBeLoggedIn } from "@/lib/auth";
import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
  stripe,
} from "@/lib/stripe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await mustBeLoggedIn();
  const customer = await createCustomerIfNull();

  

  return (
    <div className="">
      <div className="max-w-5xl m-auto w-full px-4">
        <Header />
        {children}
      </div>
    </div>
  );
}
