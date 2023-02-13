import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex flex-col min-h-screen bg-white
`;

export const Wrapper = tw.div`
    flex flex-col-reverse lg:flex-row md:items-strech
`;

export const LeftWrapper = tw.div`
    lg:w-1/2 bg-white flex items-center justify-center lg:min-h-screen pt-6 md:pt-12 px-4 xl:px-0
`;

export const RightWrapper = tw.div`
    lg:w-1/2 lg:min-h-screen overflow-y-hidden
`;

export const RightWrapperSection = tw.div`
    relative h-full
`;

export const RightWrapperImage = tw.img`
    absolute right-0 w-full h-full object-cover object-center z-0
`;

export const LeftWrapperSection = tw.div`
    w-9/12 xl:w-1/2 h-full
`;

export const Form = tw.form`
    h-full
`;

export const FormWrapper = tw.div`
    flex flex-col items-center justify-center h-full w-full
`;

export const FormContent = tw.div`
    w-full py-10 md:py-8 lg:py-0
`;

export const FormTitle = tw.h3`
    text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold xl:leading-8 text-gray-800 pt-6
`;

export const FormSocial = tw.button`
    w-full border rounded-lg border-gray-800 py-2 px-2 md:py-3 md:px-3 flex items-center mt-4 md:mt-8 gap-2
`;

export const FormDivider = tw.div`
    flex items-center justify-center my-6
`;

export const FormLine = tw.div`
    border-b border-gray-400 w-1/2
`;

export const FormLineTitle = tw.div`
    text-xs sm:text-sm md:text-base font-medium leading-none text-gray-400 px-2.5
`;

export const FormLineFooter = tw.div`
    border-b border-gray-400 w-1/2
`;

export const FormFooter = tw.div`
    flex items-center mt-5
`;

export const FormFooterNotAccount = tw.p`
    text-xs font-medium leading-none text-gray-500
`;

export const FormFooterSignup = tw.div`
    text-xs font-medium leading-none underline text-gray-800 ml-2 cursor-pointer
`;

export const FormButtonAction = tw.button`
    bg-brand flex items-center justify-center text-center text-white w-full transition duration-150 ease-in-out hover:opacity-75 rounded px-8 py-3 text-xs md:text-sm mt-6 uppercase
`;

export const FormInputs = tw.div `
    flex flex-col gap-5
`;

export const FormInput = tw.input `
    w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-brand focus:outline-none
`;

export const Label = tw.label `
form-label inline-block text-gray-700
`
