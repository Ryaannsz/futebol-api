function DetailItem({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 font-medium">{label}</p>
            <p className="text-gray-800">{value || '--'}</p>
        </div>
    )
}

export default DetailItem