interface ClientInterface{
    resource: string
    find(id: string): any
    findAll(): any
}

export default ClientInterface
