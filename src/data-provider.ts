import { BaseRecord, CreateParams, CreateResponse, DataProvider, DeleteOneParams, DeleteOneResponse, GetListParams, GetListResponse, UpdateParams, UpdateResponse } from "@refinedev/core";

const myDataProvider: DataProvider = {
    getOne: async ({ resource, id }) => {
        const response = await fetch(`https://example.com/api/v1/${resource}/${id}`);
        const data = await response.json();

        return { data };
    },
    getList: function <TData extends BaseRecord = BaseRecord>(params: GetListParams): Promise<GetListResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    create: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: CreateParams<TVariables>): Promise<CreateResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    update: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: UpdateParams<TVariables>): Promise<UpdateResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    deleteOne: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    getApiUrl: function (): string {
        throw new Error("Function not implemented.");
    }
};