
export const metadata = {
    title: "About | Create a estate management website",
    description: "Learn about | A movie application",
    keywords: 'Lekki paradise 2'
  };

export default function layout({children}) {
  return (
    <div>
        <h1 className="font-bold capitalize bg-white px-24  ">About Page</h1>
        <p className="px-24">Lekki Gardens is one of West Africa’s leading master developers. Our distinctive signature projects form a portfolio of iconic master residential developments in Lagos.</p>
        {children}
    </div>
  )
}