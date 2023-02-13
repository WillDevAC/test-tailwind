import tw from 'tailwind-styled-components';

export const Main = tw.main `
   py-10 px-6 md:py-8 md:px-6
`;

export const SpecieList = tw.div `
    w-full flex lg:gap-5 w-full overflow-x-scroll lg:overflow-x-hidden whitespace-no-wrap gap-10
`;

export const FiltersGrid = tw.div `
    grid py-10 md:grid-col-1  lg:grid-cols-auto gap-10
`;

export const FiltersContent = tw.div `
    flex flex-col w-80 gap-3 sticky top-20 h-96 -z-10
`

export const Filters = tw.div `
    flex 
`;

export const Pets = tw.div `

`

export const PetCardList = tw.div `
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10
`;

export const PetCardContent = tw.div `
    container mx-auto
`