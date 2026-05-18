import SideNav from "../ui/dashboard/sidenav";
import type { ReactNode } from 'react';
export default function Layout({children}: { children: ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:2-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}