import {render} from 'react-dom'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {App} from './App'
import Expenses from "./routes/expenses";
import {Invoices} from "./routes/invoices";
import {Invoice} from "./routes/invoice";
import {Global} from './styles/global'

const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
})

const container = document.getElementById('root')

const element = (
    <BrowserRouter>
        <Global />
        <ApolloProvider client={client}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </ApolloProvider>
    </BrowserRouter>
)

render(element, container)


