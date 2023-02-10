import tw from "tailwind-styled-components"

export const Container = tw.div `
    flex flex-col min-h-screen bg-white
`;

export const Wrapper = tw.div `
    flex flex-col-reverse lg:flex-row md:items-strech
`;

export const LeftWrapper = tw.div `
    lg:w-1/2 bg-white flex items-center justify-center lg:min-h-screen pt-6 md:pt-12 px-4 xl:px-0
`;

export const RightWrapper = tw.div `
    lg:w-1/2 lg:min-h-screen overflow-y-hidden
`;

export const RightWrapperSection = tw.div `
    relative h-full
`;

export const RightWrapperImage = tw.img `
    absolute right-0 w-full h-full object-cover object-center z-0
`;

export const LeftWrapperSection = tw.div `
    w-9/12 xl:w-1/2 h-full
`;

export const Form = tw.form `
    h-full
`