import Link from "next/link";
import { UrlObject } from "url";

type LinkProps = {
  children: React.ReactNode;
  href: string | UrlObject;
  disabled?: boolean;
};

export function AppLink({ children, href, disabled }: LinkProps) {
  return disabled === true ? (
    <span>{children}</span>
  ) : (
    <Link href={href}>{children}</Link>
  );
}

// const searchParams = await props.searchParams;
// const page = Number.parseInt(searchParams.page ?? "1");
// const posts = await getPosts(10, page);

{
  /* <AppLink
  href={{
    query: { page: page + 1 },
  }}
  disabled={page === 3}
  >
  Next
  </AppLink>
  <AppLink
  href={{
    query: { page: page - 1 },
  }}
  disabled={page === 1}
  >
  Prev
</AppLink> */
}
