
import PageLayout from '@/components/Layouts/PagesLayout'

export default function Page() {
    return (
        <div>
            <h1>Teste Page</h1>
        </div>
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <PageLayout>
           // {page}
        </PageLayout>
    )
}