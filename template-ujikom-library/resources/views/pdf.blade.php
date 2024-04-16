<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Reports</title>
  </head>
  <body>
      <h1 style="text-align: center">Borrowed Book Report</h1>
      <table style="width:100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">No</th>
            <td style="border: 1px solid #ddd; padding: 8px;">Borrower</td>
            <th style="border: 1px solid #ddd; padding: 8px;">Book</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Borrowed At</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Returned At</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
          </tr>
        </thead>
        @foreach ($loans as $loan)

        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loop->iteration}}
            </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loan->user->name}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loan->book->title}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loan->loaned_at}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loan->returned_at ? $loan->returned_at : '-'}}
          </td>
          <td style="border: 1px solid #ddd; padding: 8px;">
            {{$loan->status}}
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </body>
</html>
