import AdminSidebar from "./AdminSidebar"

interface AdminLayoutPageProps {
    children: React.ReactNode
}

const AdminLayoutPage = ({ children }: AdminLayoutPageProps) => {
    return (
        <>
            <div className="overFlow-height bg-gray-50 flex items-start justify-between overflow-hidden">

                <div className="overFlow-height w-15 lg:w-1/5 bg-[#76accd] text-white p-1 lg:p-3">
                    <AdminSidebar />
                </div>

                <div className="overFlow-height w-full lg:w-4/5 overflow-y-scroll">
                    {children}
                </div>

            </div>
        </>
    )
}

export default AdminLayoutPage