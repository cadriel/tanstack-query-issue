import { useQuery } from '@tanstack/vue-query'
import { testApi } from '@/api'

const entryKeys = {
  all: ['entries'] as const,
  list: () => [...entryKeys.all, 'list'] as const
}

export const useEntries = () => {
  return useQuery({
    queryKey: entryKeys.list(),
    queryFn: testApi.getEntries,
    select: (data) => data.slice(0, 10)
  })
}
