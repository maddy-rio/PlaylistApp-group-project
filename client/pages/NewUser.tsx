import { Flex, Heading, TextField, IconButton, Text, Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import * as Form from '@radix-ui/react-form';

import Navigation from '../components/Navigation'
import Canvas from '../components/Canvas'

import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addProfile } from '../apis/addInfo'
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
    <Flex width="100%" height="100%" className="app">
      <Flex
        direction="column"
        width="100%"
        mx="3"
        my="2"
        className="fill-height"
      >
        <Navigation />
        <Flex height="100%" m="7">
          <div className="username">
            <Heading as="h1" className="dashboard-h1 gradient-text">
              Welcome to VibesVault!
            </Heading>
            
            <Form.Root onSubmit={handleSubmit}>
              <Form.Field name="name">
                <Form.Label className="username-label">
                  Get started by entering your first name or nickname:
                </Form.Label>
                <Flex gap="4" width="100%" justify="between">
                <Form.Control className="username-box" type="text"
                        name="name"
                        id="name"
                        placeholder="Nickname"
                        required={true}
                        onChange={handleChange}>
                    
                </Form.Control>
                <Form.Submit className="username-submit">

                    <ArrowRightIcon width="40px" height="40px" />

                </Form.Submit>
                </Flex>
              </Form.Field>
            </Form.Root>

          </div>
        </Flex>
      </Flex>
    </Flex>
    <div className='background'>
    <Canvas />
    </div>
    </>
  )
}
