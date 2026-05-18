import SideNav from "../ui/dashboard/sidenav";

export default function Layout({children}: { children: ReactDOM.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:2-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}