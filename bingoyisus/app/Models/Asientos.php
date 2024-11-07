<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Asientos extends Model
{

    use SoftDeletes;

    use HasFactory;
    
    protected $table = "asientos";

    protected $primary = "id";

    protected $fillable = [
        "disponible"
    ];

}
