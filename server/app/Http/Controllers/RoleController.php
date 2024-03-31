<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{

    public function index()
    {
        $roles = Role::all();
        return response()->json($roles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:roles',
        ]);

        $role = Role::create($request->all());

        return response()->json($role, 201);
    }


    public function show($id)
    {
        $role = Role::findOrFail($id);
        return response()->json($role);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|unique:roles,name,' . $id,
        ]);

        $role = Role::findOrFail($id);
        $role->update($request->all());

        return response()->json($role, 200);
    }


    public function destroy($id)
    {
        $role = Role::findOrFail($id);
        $role->delete();

        return response()->json(null, 204);
    }
}
