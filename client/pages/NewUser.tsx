import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { addProfile } from '../apis/addInfo'
import { Profile } from '../../models/addInfo'
import { useState } from 'react'

interface Props {
  spotifyId: string
}

export default function NewUser({ spotifyId }: Props) {
  const [form, setForm] = useState({ name: '' })

  const queryClient = useQueryClient()

  const userMutation = useMutation({
    mutationFn: addProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // check later
    e.preventDefault()
    userMutation.mutate({ ...form, user_id: spotifyId })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
