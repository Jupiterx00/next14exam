import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-[230px]">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <header className="w-full bg-blue-600 h-[65px]">

                </header>
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </div>
    );
}