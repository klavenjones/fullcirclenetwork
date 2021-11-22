import Link from "next/link";
import tw, { css } from "twin.macro";

export const FooterContainer = tw.footer`py-20 text-white bg-gray-800`;
export const FooterInnerContainer = tw.div`container px-4 mx-auto text-center`;
export const LowerFooterContainer = tw.div`container px-4 py-4 mx-auto`;

export const socialLinks = css`
  ${tw`inline-block cursor-pointer text-gray-50 hover:text-red-700 transition-all duration-300`}
  &:nth-child(2) {
    margin: 0 2.5rem;
  }
`;

export const FooterAuthor = ({ href, children }) => (
  <LowerFooterContainer>
    <p tw="text-center text-base text-white">
      Website by {"  "}
      <Link href={href} passHref={true}>
        <a tw="text-white transition-all duration-200 hover:text-red-500">
          {children}
        </a>
      </Link>
    </p>
  </LowerFooterContainer>
);

export const FooterCopyRight = ({ children }) => (
  <LowerFooterContainer>
    <p tw="text-center text-base text-white">{children}</p>
  </LowerFooterContainer>
);

export const FooterNav = ({ navigation }) => (
  <ul tw="my-6 flex flex-wrap items-center justify-center space-x-10">
    {navigation.map((item) => (
      <FooterNavItem key={item.title} href={item.href} title={item.title} />
    ))}
  </ul>
);

export const FooterSocialNav = ({ navigation }) => (
  <div tw="mb-4">
    {navigation.map((item) => (
      <FooterSocialItem key={item.title} href={item.href}>
        {item.icon}
      </FooterSocialItem>
    ))}
  </div>
);

export const FooterNavItem = ({ href, title }) => (
  <li tw="mb-2 md:mb-0">
    <Link href={href}>
      <a tw="text-sm text-gray-50 cursor-pointer hover:text-red-700 transition-all duration-300">
        {title}
      </a>
    </Link>
  </li>
);

export const FooterSocialItem = ({ href, children }) => (
  <>
    <Link href={href} passHref={true}>
      <a css={socialLinks}>{children}</a>
    </Link>
  </>
);
