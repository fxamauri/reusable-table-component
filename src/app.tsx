import Table from './table';

export default function App() {
    return (
        <Table
            columns={[
                { id: 'id', label: 'ID' },
                { id: 'age', label: 'Name' },
                { id: 'age', label: 'Age' },
            ]}
            data={[
                { id: '1', name: 'John Doe', age: '20' },
                { id: '2', name: 'Jane Doe', age: '21' },
            ]}
        />
    )
}