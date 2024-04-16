<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reports</title>
  </head>
  <body>
      <h1 style="text-align: center">Users</h1>
      <table style="width:100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">No</th>
            <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
            <th style="border: 1px solid #ddd; padding: 8px;">Username</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Email</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Role</th>
          </tr>
        </thead>
        @foreach ($users as $user)

        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loop->iteration}}
            </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$user->name}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$user->username}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$user->email}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$user->role}}
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </body>
</html>
