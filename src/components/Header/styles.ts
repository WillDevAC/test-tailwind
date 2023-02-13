import tw from "tailwind-styled-components";

export const Header = tw.header`
   bg-white sticky top-0 z-10
`;

export const HeaderWrapper = tw.div`
    border py-3 px-6 
`;

export const HeaderContent = tw.div`
    flex justify-between
`;

export const HeaderLogo = tw.div`
    flex items-center
`;

export const HeaderLinks = tw.nav`
    ml-2 flex items-center justify-center
`;

export const HeaderLink = tw.div`
    flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100
`;

export const HeaderActions = tw.div`
    ml-2 flex bg-brand text-white cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-red-400
`;

export const Avatar = tw.img `
    w-10 h-10 p-1 rounded-full ring-2 ng-brand dark:ring-brand
`